import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado, Encargado, EncargadoWithRelations, Producto } from 'src/app/api/models';
import { EncargadoControllerService, EmpleadoControllerService, ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  fechaInicial: string,
  fechaFinal: string,
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
  encargado:EncargadoWithRelations[]=[];
  empleado:Empleado[]=[];
  producto:Producto[]=[];

  constructor(
    private messageService: NzMessageService,
    private encargadoService:EncargadoControllerService,
    private empleadoService:EmpleadoControllerService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.encargadoService.find(
      {"filter":{"include": [{"relation": "Productos"},{"relation": "Empleados"}]}}
    ).subscribe(data=>{this.encargado=data
    console.log(data)
    })
    this.empleadoService.find().subscribe(data=>this.empleado=data)
    this.productoService.find().subscribe(data=>this.producto=data)
  }

  eliminar(id: number ): void {
    this.encargadoService.deleteById({ id }).subscribe(() => {
      this.encargado = this.encargado.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  //Drawer
  get title(): string {
    return `${this.size} Drawer`;
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
      this.formEncargado.setValue({ ...data })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEncargado.reset()
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  CleanForm(){
    this.validateForm  = this.fb.group({
      id: [null, [Validators.required]],
      fechaInicial: [null, [Validators.required]],
      fechaFinal: [null, [Validators.required]],
      idEmpleado: [null, [Validators.required]],
      idProducto: [null, [Validators.required]]
    });
  } 

  guardar(): void {
   // console.log(this.formEmpleadoProducto.value);
    
    this.formEncargado.setValue({ ...this.formEncargado.value })
    if (this.formEncargado.value.id) {
      this.encargadoService.updateById({ 'id': this.formEncargado.value.id, 'body': this.formEncargado.value }).subscribe(
        () => {
          //actualizar
          this.encargado = this.encargado.map(obj => {
            if (obj.id === this.formEncargado.value.id){
              return this.formEncargado.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formEncargado.reset()
        }
      )

    } else {
      //insertar
      delete this.formEncargado.value.id
      this.encargadoService.create({ body: this.formEncargado.value }).subscribe((datoAgregado) => {
        this.encargado = [...this.encargado, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEncargado.reset()
      })
    }
    this.visible= false
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
    compare: (a: DataItem, b: DataItem) => a.id- b.id,
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
      compare: null,
      priority: false
    },
    {
      title: 'Producto',
      compare: null,
      priority: false
    },
  ];
}
