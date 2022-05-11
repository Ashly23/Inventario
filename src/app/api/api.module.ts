/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CategoriasControllerService } from './services/categorias-controller.service';
import { AreaControllerService } from './services/area-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EstadoProductoControllerService } from './services/estado-producto-controller.service';
import { FabricanteControllerService } from './services/fabricante-controller.service';
import { GarantiaControllerService } from './services/garantia-controller.service';
import { PartesControllerService } from './services/partes-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductoControllerService } from './services/producto-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CategoriasControllerService,
    AreaControllerService,
    EmpleadoControllerService,
    EstadoProductoControllerService,
    FabricanteControllerService,
    GarantiaControllerService,
    PartesControllerService,
    PingControllerService,
    ProductoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
