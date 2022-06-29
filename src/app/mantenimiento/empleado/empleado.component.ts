import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area, Empleado, EmpleadoWithRelations } from 'src/app/api/models';
import { AreaControllerService, EmpleadoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
  id: number;
  idArea: number;
  nombre: string;
  correo: string;
  telefono: string;
  estado: boolean;
}

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  empleado:EmpleadoWithRelations[]=[];
  area:Area[]=[];

  constructor(
    private messageService: NzMessageService,
    private empleadoService:EmpleadoControllerService,
    private areaService:AreaControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.empleadoService.find(
      {
        "filter": `{"include": [{"relation": "Areas"}]}`
      }
    ).subscribe(data=> {
      this.empleado=data 
    })
    this.areaService.find().subscribe(data=>this.area=data)
  }

  eliminar(id: number): void {
    this.empleadoService.deleteById({ id }).subscribe(() => {
      this.empleado = this.empleado.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Empleado): void {
    if (data?.id) {
      this.formEmpleado.setValue({ 
      id: data.id, 
      idArea: data.idArea,
      nombre: data.nombre,
      correo: data.correo,
      telefono: data.telefono,
      estado: String(data.estado) 
      })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEmpleado.reset()
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
      idArea: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    console.log(this.formEmpleado.value)
    this.formEmpleado.setValue({ ...this.formEmpleado.value, 'estado': Boolean(this.formEmpleado.value.estado) })
    if (this.formEmpleado.value.id) {
      this.empleadoService.updateById({ 'id': this.formEmpleado.value.id, 'body': this.formEmpleado.value }).subscribe(
        (data) => {
          //actualizar
          this.empleado = this.empleado.map(obj => {
            if (obj.id === this.formEmpleado.value.id){
              return data;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formEmpleado.reset()
        }
      )

    } else {
      //insertar
      delete this.formEmpleado.value.id
    //  console.log({ body: this.formEmpleado.value })
        this.empleadoService.create({ body: this.formEmpleado.value }).subscribe((datoAgregado) => {
        this.empleado = [...this.empleado, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEmpleado.reset()
      })
    }
    this.visible = false
   }

  formEmpleado: FormGroup = this.fb.group({
    id: [],
    idArea: [],
    nombre: [],
    correo: [],
    telefono: [],
    estado: []
  })

  //Tabla
  listOfColumn = [
    {
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Area',
      compare: null,
      priority: false
    },
    {
      title: 'Correo',
      compare: null,
      priority: false
    },
    {
      title: 'Telefono',
      compare: null,
      priority: false
    },
    {
      title: 'Estado',
      compare: null,
      priority: false
    }
  ];

/*
  listOfData: DataItem[] = [
    {
      nombre: 'prueba3',
      correo: 'prueba3@gmail.com',
      telefono: 98780010,
      estado: true
    }
  ];
  */
}
