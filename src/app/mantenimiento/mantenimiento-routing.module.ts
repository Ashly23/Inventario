import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EmpleadoProductoComponent } from './empleado-producto/empleado-producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EstadoProductoComponent } from './estado-producto/estado-producto.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { PartesComponent } from './partes/partes.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: 'area', component: AreaComponent},
  { path: 'categoria', component: CategoriaComponent},
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'estado-producto', component: EstadoProductoComponent},
  { path: 'fabricante', component: FabricanteComponent},
  { path: 'garantia', component: GarantiaComponent},
  { path: 'partes', component: PartesComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'empleado-producto', component: EmpleadoProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
