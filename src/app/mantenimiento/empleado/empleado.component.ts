import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/api/models';
import { EmpleadoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
  id: number;
  nombre: string;
  correo: string;
  telefono: number;
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
  empleado:Empleado[]=[];

  constructor(
    private messageService: NzMessageService,
    private empleadoService:EmpleadoControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.empleadoService.find().subscribe(data=>this.empleado=data)
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
      this.formEmpleado.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEmpleado.reset()
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
      nombre: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    this.formEmpleado.setValue({ ...this.formEmpleado.value, 'estado': Boolean(this.formEmpleado.value.estado) })
    if (this.formEmpleado.value.id) {
      this.empleadoService.updateById({ 'id': this.formEmpleado.value.id, 'body': this.formEmpleado.value }).subscribe(
        () => {
          //actualizar
          this.empleado = this.empleado.map(obj => {
            if (obj.id === this.formEmpleado.value.id){
              return this.formEmpleado.value;
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
    nombre: [],
    correo: [],
    telefono: [],
    estado: []
  })

  //Tabla
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 1
    },
    {
      title: 'Nombre',
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
      compare: (a: DataItem, b: DataItem) => a.telefono - b.telefono,
      priority: 1
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
