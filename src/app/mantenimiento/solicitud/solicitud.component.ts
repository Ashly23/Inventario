import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado, Partes, Producto, Solicitud, SolicitudWithRelations } from 'src/app/api/models';
import { EmpleadoControllerService, PartesControllerService, ProductoControllerService, SolicitudControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  idEmpleado: number,
  idProducto: number,
  idPartes: number,
  fechaSolicitud: Date,
  cotizacion: number,
  estado: boolean
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  validateForm !: FormGroup;
  visible: boolean = false;
  solicitud: SolicitudWithRelations[]=[];
  empleado: Empleado[]=[];
  producto: Producto[]=[];
  partes: Partes[]=[];
  pipe = new DatePipe('en-US');

  constructor(
    private messageService: NzMessageService,
    private solicitudService:SolicitudControllerService,
    private empleadoService:EmpleadoControllerService,
    private partesService:PartesControllerService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.solicitudService.find(
      {
        "filter": `{"include": [{"relation": "Empleados"}, {"relation": "Productos"}, {"relation": "Partes"}]}`
      }
    ).subscribe(data=> {
      this.solicitud=data
    })
    this.empleadoService.find().subscribe(data=>this.empleado=data)
    this.partesService.find().subscribe(data=>this.partes=data)
    this.productoService.find().subscribe(data=>this.producto=data)
  }

  
  eliminar(id: number): void {
    this.solicitudService.deleteById({ id }).subscribe(() => {
      this.solicitud = this.solicitud.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Solicitud): void {
    if (data?.id) {
      this.formSolicitud.setValue({ 
        id: data.id,
        idEmpleado: data.idEmpleado,
        idProducto: data.idProducto,
        idPartes: data.idPartes,
        fechaSolicitud:(new Date(data.fechaSolicitud)).toISOString(),
        cotizacion: data.cotizacion,
        estado: String(data.estado)
     })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formSolicitud.reset()
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

  CleanForm(){
    this.validateForm  = this.fb.group({
      id: [null, [Validators.required]],
      idEmpleado: [null, [Validators.required]],
      idProducto: [null, [Validators.required]],
      idPartes: [null, [Validators.required]],
      fechaSolicitud: [null, [Validators.required]],
      cotizacion: [null, [Validators.required]],
      estado: [null, [Validators.required]],     
    });
  } 

  guardar(): void {
    this.formSolicitud.setValue({ ...this.formSolicitud.value, 'estado': Boolean(this.formSolicitud.value.estado) })
    if (this.formSolicitud.value.id) {
      this.solicitudService.updateById({ 'id': this.formSolicitud.value.id, 'body': this.formSolicitud.value }).subscribe(
        (data) => {
          //actualizar
          this.solicitud = this.solicitud.map(obj => {
            if (obj.id === this.formSolicitud.value.id){
              return data;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formSolicitud.reset()
        }
      )

    } else {
      //insertar
      delete this.formSolicitud.value.id
      this.solicitudService.create({ body: this.formSolicitud.value }).subscribe((datoAgregado) => {
        this.solicitud = [...this.solicitud, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formSolicitud.reset()
      })
    }
    this.visible = false
   }

  formSolicitud: FormGroup = this.fb.group({
    id: [],
    idEmpleado: [],
    idProducto: [],
    idPartes: [],
    fechaSolicitud: [],
    cotizacion: [],
    estado: [],   
  })

   //Tabla
   listOfColumn = [
    {
      title: 'Empleado',
      compare: (a: DataItem, b: DataItem) => a.idEmpleado - b.idEmpleado,
      priority: 1
    },
    {
      title: 'Producto',
      compare: (a: DataItem, b: DataItem) => a.idProducto - b.idProducto,
      priority: 2
    },
    {
      title: 'Partes',
      compare: (a: DataItem, b: DataItem) => a.idPartes - b.idPartes,
      priority: 3
    },
    {
      title: 'Fecha de Solicitud',
      compare: null,
      priority: false
    },
    {
      title: 'Cotizacion',
      compare: (a: DataItem, b: DataItem) => a.cotizacion - b.cotizacion,
      priority: 3
    },
    {
      title: 'Estado',
      compare: null,
      priority: false
    },
  ];
}
