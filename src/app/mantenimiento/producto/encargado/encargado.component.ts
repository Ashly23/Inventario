import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado, Encargado, EncargadoWithRelations, Producto } from 'src/app/api/models';
import { EncargadoControllerService, EmpleadoControllerService, ProductoControllerService, ProductoPartesDetalleControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  fechaInicial: Date,
  fechaFinal: Date,
  idEmpleado: number,
  idProducto: number
}

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {
  isVisible = false;
  size: 'large' | 'default' = 'default';
  validateForm !: FormGroup;
  visible = false;
  visibleDrawer = false;
  encargado: EncargadoWithRelations[] = [];
  empleado: Empleado[] = [];
  producto: Producto[] = [];
  pipe = new DatePipe('en-US');
  @Input() productoPosicion!: Producto;
  @Input() detalleEncargado: any[] = [];
  

  constructor(
    private messageService: NzMessageService,
    private encargadoService: EncargadoControllerService,
    private empleadoService: EmpleadoControllerService,
    private productoService: ProductoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.filtrar();
    /*
    this.encargadoService.find(
      {
        "filter": `{"include": [{"relation": "Productos"},{"relation": "Empleados"}]}`
      }
    ).subscribe(data => {
      this.encargado = data
     // console.log("DATOS",data)
    }) */
    this.empleadoService.find().subscribe(data => this.empleado = data)
    this.productoService.find().subscribe(data => this.producto = data)
  }

  filtrar(){
    for(let i = 0; i < this.detalleEncargado.length; i++){
      if(this.detalleEncargado[i].idProducto === this.productoPosicion.id){
        this.encargado = [... this.encargado, this.detalleEncargado[i]];
      }
    }
    this.encargado = [... this.encargado];
  }

  eliminar(id: number): void {
    this.encargadoService.deleteById({ id }).subscribe(() => {
      this.encargado = this.encargado.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  //Drawer
  get title(): string {
    return `Encargado del Producto`;
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visibleDrawer = true;
  }

  close(): void {
    this.visibleDrawer = false;
  }
  //FD

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Encargado): void {
    if (data?.id) {
      this.formEncargado.setValue({ 
        id: data.id,
        fechaInicial:(new Date(data.fechaInicial)).toISOString(),
        fechaFinal: (new Date(data.fechaFinal)).toISOString(),
        idEmpleado: data.idEmpleado,
        idProducto: data.idProducto
      })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEncargado.reset()
  }

  showModal(): void {
    this.visible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.visible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.visible = false;
  }

  CleanForm() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      fechaInicial: [null, [Validators.required]],
      fechaFinal: [null, [Validators.required]],
      idEmpleado: [null, [Validators.required]],
      idProducto: [null, [Validators.required]]
    });
  }

  //console.log(this.formEncargado.value);

  guardar(): void {
    console.log(this.formEncargado.value)
    this.formEncargado.setValue({ ...this.formEncargado.value })
    if (this.formEncargado.value.id) {
      this.encargadoService.updateById({ 'id': this.formEncargado.value.id, 'body': this.formEncargado.value }).subscribe(
        (data) => {
          //actualizar
          this.encargado = this.encargado.map(obj => {
            if (obj.id === this.formEncargado.value.id) {
              return data;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formEncargado.reset()
        }
      )
    } else {
      //insertar
      //console.log(this.formEncargado.value);
      delete this.formEncargado.value.id
      this.encargadoService.create({ body: this.formEncargado.value }).subscribe((datoAgregado) => {
        this.encargado = [...this.encargado, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEncargado.reset()
      })
    }
    this.visible = false
  }

  formEncargado: FormGroup = this.fb.group({
    id: [],
    fechaInicial: [],
    fechaFinal: [],
    idEmpleado: [],
    idProducto: []
  })

  //Tabla
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 2
    },
    {
      title: 'Fecha Inicial',
      compare: null,
      priority: false
    },
    {
      title: 'Fecha Final',
      compare: null,
      priority: false
    },
    {
      title: 'Empleado',
      compare: (a: DataItem, b: DataItem) => a.idEmpleado - b.idEmpleado,
      priority: 0
    }
  ];
}
