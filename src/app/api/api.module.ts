/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CategoriasControllerService } from './services/categorias-controller.service';
import { AreaControllerService } from './services/area-controller.service';
import { AreaEmpleadoControllerService } from './services/area-empleado-controller.service';
import { AreaProductoControllerService } from './services/area-producto-controller.service';
import { CategoriasProductoControllerService } from './services/categorias-producto-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EmpleadoAreaControllerService } from './services/empleado-area-controller.service';
import { EmpleadoProductoControllerService } from './services/empleado-producto-controller.service';
import { EmpleadoSolicitudControllerService } from './services/empleado-solicitud-controller.service';
import { EncargadoControllerService } from './services/encargado-controller.service';
import { EncargadoEmpleadoControllerService } from './services/encargado-empleado-controller.service';
import { EncargadoProductoControllerService } from './services/encargado-producto-controller.service';
import { ReportesControllerService } from './services/reportes-controller.service';
import { EstadoProductoControllerService } from './services/estado-producto-controller.service';
import { EstadoProductoProductoControllerService } from './services/estado-producto-producto-controller.service';
import { FabricanteControllerService } from './services/fabricante-controller.service';
import { FabricantePartesControllerService } from './services/fabricante-partes-controller.service';
import { FabricanteProductoControllerService } from './services/fabricante-producto-controller.service';
import { GarantiaControllerService } from './services/garantia-controller.service';
import { GarantiaProductoControllerService } from './services/garantia-producto-controller.service';
import { PartesControllerService } from './services/partes-controller.service';
import { PartesFabricanteControllerService } from './services/partes-fabricante-controller.service';
import { PartesProductoControllerService } from './services/partes-producto-controller.service';
import { PartesSolicitudControllerService } from './services/partes-solicitud-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductoControllerService } from './services/producto-controller.service';
import { ProductoAreaControllerService } from './services/producto-area-controller.service';
import { ProductoCategoriasControllerService } from './services/producto-categorias-controller.service';
import { ProductoEmpleadoControllerService } from './services/producto-empleado-controller.service';
import { ProductoEncargadoControllerService } from './services/producto-encargado-controller.service';
import { ProductoEstadoProductoControllerService } from './services/producto-estado-producto-controller.service';
import { ProductoFabricanteControllerService } from './services/producto-fabricante-controller.service';
import { ProductoPartesControllerService } from './services/producto-partes-controller.service';
import { ProductoSolicitudControllerService } from './services/producto-solicitud-controller.service';
import { SolicitudControllerService } from './services/solicitud-controller.service';
import { SolicitudEmpleadoControllerService } from './services/solicitud-empleado-controller.service';
import { SolicitudPartesControllerService } from './services/solicitud-partes-controller.service';
import { SolicitudProductoControllerService } from './services/solicitud-producto-controller.service';

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
    AreaEmpleadoControllerService,
    AreaProductoControllerService,
    CategoriasProductoControllerService,
    EmpleadoControllerService,
    EmpleadoAreaControllerService,
    EmpleadoProductoControllerService,
    EmpleadoSolicitudControllerService,
    EncargadoControllerService,
    EncargadoEmpleadoControllerService,
    EncargadoProductoControllerService,
    ReportesControllerService,
    EstadoProductoControllerService,
    EstadoProductoProductoControllerService,
    FabricanteControllerService,
    FabricantePartesControllerService,
    FabricanteProductoControllerService,
    GarantiaControllerService,
    GarantiaProductoControllerService,
    PartesControllerService,
    PartesFabricanteControllerService,
    PartesProductoControllerService,
    PartesSolicitudControllerService,
    PingControllerService,
    ProductoControllerService,
    ProductoAreaControllerService,
    ProductoCategoriasControllerService,
    ProductoEmpleadoControllerService,
    ProductoEncargadoControllerService,
    ProductoEstadoProductoControllerService,
    ProductoFabricanteControllerService,
    ProductoPartesControllerService,
    ProductoSolicitudControllerService,
    SolicitudControllerService,
    SolicitudEmpleadoControllerService,
    SolicitudPartesControllerService,
    SolicitudProductoControllerService,
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
