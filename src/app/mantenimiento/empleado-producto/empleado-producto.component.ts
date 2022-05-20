import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado, EmpleadoProducto, Producto } from 'src/app/api/models';
import { EmpleadoControllerService, EmpleadoProductoControllerService, ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  fechaInicial: string,
  fechaFinal: string,
  idEmpleado: string,
  idProducto: number
}

@Component({
  selector: 'app-empleado-producto',
  templateUrl: './empleado-producto.component.html',
  styleUrls: ['./empleado-producto.component.css']
})

export class EmpleadoProductoComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  empleadoProducto:EmpleadoProducto[]=[];
  empleado:Empleado[]=[];
  producto:Producto[]=[];

  constructor(
    private messageService: NzMessageService,
    private empleadoProductoService:EmpleadoProductoControllerService,
    private empleadoService:EmpleadoControllerService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.empleadoProductoService.find().subscribe(data=>this.empleadoProducto=data),
    this.empleadoService.find().subscribe(data=>this.empleado=data)
    this.productoService.find().subscribe(data=>this.producto=data)
  }

  eliminar(id: number): void {
    this.empleadoProductoService.deleteById({ id }).subscribe(() => {
      this.empleadoProducto= this.empleadoProducto.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: EmpleadoProducto): void {
    if (data?.id) {
      this.formEmpleadoProducto.setValue({ ...data })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEmpleadoProducto.reset()
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
    
    this.formEmpleadoProducto.setValue({ ...this.formEmpleadoProducto.value })
    if (this.formEmpleadoProducto.value.id) {
      this.empleadoProductoService.updateById({ 'id': this.formEmpleadoProducto.value.id, 'body': this.formEmpleadoProducto.value }).subscribe(
        () => {
          //actualizar
          this.empleadoProducto = this.empleadoProducto.map(obj => {
            if (obj.id === this.formEmpleadoProducto.value.id){
              return this.formEmpleadoProducto.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formEmpleadoProducto.reset()
        }
      )

    } else {
      //insertar
      delete this.formEmpleadoProducto.value.id
      this.empleadoProductoService.create({ body: this.formEmpleadoProducto.value }).subscribe((datoAgregado) => {
        this.empleadoProducto = [...this.empleadoProducto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEmpleadoProducto.reset()
      })
    }
    this.visible = false
   }

  formEmpleadoProducto: FormGroup = this.fb.group({
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
      priority: 0
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
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Id Producto',
      compare: (a: DataItem, b: DataItem) => a.idProducto - b.idProducto,
      priority: 2
    },
  ];
}