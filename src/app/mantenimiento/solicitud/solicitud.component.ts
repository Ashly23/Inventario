import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado, Solicitud, SolicitudWithRelations } from 'src/app/api/models';
import { EmpleadoControllerService, SolicitudControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  idEmpleado: number;
  partes: string;
  descripcion: string;
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  validateForm !: FormGroup;
  visible: boolean = false;
  solicitud:SolicitudWithRelations[]=[];
  empleado:Empleado[]=[];
  messageService: any;

  constructor(
    private solicitudService:SolicitudControllerService,
    private empleadoService:EmpleadoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.solicitudService.find(
      {
        "filter": `{"include": [{"relation": "Empleados"}]}`
      }
    ).subscribe(data=>this.solicitud=data)
    this.empleadoService.find().subscribe(data=>this.empleado=data)
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
       partes: data.partes,
       descripcion: data.descripcion
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
      partes: [null, [Validators.required]],
      descripcion: [null, [Validators.required]]
    });
  } 

  guardar(): void {
    console.log(this.formSolicitud.value)
    this.formSolicitud.setValue({ ...this.formSolicitud.value })
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
    partes: [],
    descripcion: []
  })

   //Tabla
   listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 0
    },
    {
      title: 'Empleado',
      compare: (a: DataItem, b: DataItem) => a.idEmpleado - b.idEmpleado,
      priority: 1
    },
    {
      title: 'Parte Solicitada',
      compare: null,
      priority: false
    },
    {
      title: 'Descripcion',
      compare: null,
      priority: false
    },
  ];
  

}
