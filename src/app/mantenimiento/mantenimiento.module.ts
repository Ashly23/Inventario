import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { AreaComponent } from './area/area.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EstadoProductoComponent } from './estado-producto/estado-producto.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { PartesComponent } from './producto/partes/partes.component';
import { ProductoComponent } from './producto/producto.component';
import { EncargadoComponent } from './producto/encargado/encargado.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';

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
    EncargadoComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    NzRadioModule,
    NzSelectModule,
    NzInputModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzCardModule
  ],
  exports: [
    AreaComponent,
    CategoriaComponent,
    EmpleadoComponent,
    EstadoProductoComponent,
    FabricanteComponent,
    GarantiaComponent,
    PartesComponent,
    EncargadoComponent,
    ProductoComponent
  ]
})
export class MantenimientoModule { }
