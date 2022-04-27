import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { AreaComponent } from './area/area.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EstadoProductoComponent } from './estado-producto/estado-producto.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { PartesComponent } from './partes/partes.component';
import { ProductoComponent } from './producto/producto.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalProductoComponent } from './producto/modal-producto/modal-producto.component';
import { ModalAreaComponent } from './area/modal-area/modal-area.component';
import { ModalCategoriaComponent } from './categoria/modal-categoria/modal-categoria.component';
import { ModalEmpleadoComponent } from './empleado/modal-empleado/modal-empleado.component';
import { ModalFabricanteComponent } from './fabricante/modal-fabricante/modal-fabricante.component';
import { ModelEstadoComponent } from './estado-producto/model-estado/model-estado.component';
import { ModalGarantiaComponent } from './garantia/modal-garantia/modal-garantia.component';
import { ModalPartesComponent } from './partes/modal-partes/modal-partes.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AreaComponent,
    CategoriaComponent,
    EmpleadoComponent,
    EstadoProductoComponent,
    FabricanteComponent,
    GarantiaComponent,
    PartesComponent,
    ProductoComponent,
    ModalProductoComponent,
    ModalAreaComponent,
    ModalCategoriaComponent,
    ModalEmpleadoComponent,
    ModelEstadoComponent,
    ModalFabricanteComponent,
    ModalGarantiaComponent,
    ModalPartesComponent

    
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    ReactiveFormsModule
  ],
  exports: [
    AreaComponent,
    CategoriaComponent,
    EmpleadoComponent,
    EstadoProductoComponent,
    FabricanteComponent,
    GarantiaComponent,
    PartesComponent,
    ProductoComponent
  ]
})
export class MantenimientoModule { }
