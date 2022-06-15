import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { EquiposDepartComponent } from './equipos-depart/equipos-depart.component';
import { EquiposObsoletosComponent } from './equipos-obsoletos/equipos-obsoletos.component';
import { ReporteDetalladoComponent } from './reporte-detallado/reporte-detallado.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    EquiposDepartComponent,
    EquiposObsoletosComponent,
    ReporteDetalladoComponent,
    
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NzIconModule
  ],
  exports: [
    EquiposDepartComponent,
    EquiposObsoletosComponent,
    ReporteDetalladoComponent
  ]
})
export class ReportesModule { }
