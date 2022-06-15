import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposDepartComponent } from './equipos-depart/equipos-depart.component';
import { EquiposObsoletosComponent } from './equipos-obsoletos/equipos-obsoletos.component';
import { ReporteDetalladoComponent } from './reporte-detallado/reporte-detallado.component';

const routes: Routes = [
  { path: 'equipos-depart', component: EquiposDepartComponent},
  { path: 'equipos-obsoletos', component: EquiposObsoletosComponent},
  { path: 'reporte-detallado', component: ReporteDetalladoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
