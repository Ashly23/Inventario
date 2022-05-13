import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EstadoProducto } from 'src/app/api/models';
import { EstadoProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  nombre: string;
  observacion: string;
  estado: boolean;
}

@Component({
  selector: 'app-estado-producto',
  templateUrl: './estado-producto.component.html',
  styleUrls: ['./estado-producto.component.css']
})
export class EstadoProductoComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  estado:EstadoProducto[]=[];

  constructor(
    private messageService: NzMessageService,
    private estadoService:EstadoProductoControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.estadoService.find().subscribe(data=>this.estado=data)
  }

  eliminar(id: number): void {
    this.estadoService.deleteById({ id }).subscribe(() => {
      this.estado = this.estado.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: EstadoProducto): void {
    if (data?.id) {
      this.formEstado.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formEstado.reset()
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
      observacion: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  } 

  
  guardar(): void {
    this.formEstado.setValue({ ...this.formEstado.value, 'estado': Boolean(this.formEstado.value.estado) })
    if (this.formEstado.value.id) {
      this.estadoService.updateById({ 'id': this.formEstado.value.id, 'body': this.formEstado.value }).subscribe(
        () => {
          //actualizar
          this.estado = this.estado.map(obj => {
            if (obj.id === this.formEstado.value.id){
              return this.formEstado.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formEstado.reset()
        }
      )

    } else {
      //insertar
      delete this.formEstado.value.id
      this.estadoService.create({ body: this.formEstado.value }).subscribe((datoAgregado) => {
        this.estado = [...this.estado, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formEstado.reset()
      })
    }
    this.visible = false
   }

  formEstado: FormGroup = this.fb.group ({
    id: [],
    nombre: [],
    observacion: [],
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
      title: 'Observacion',
      compare: null,
      priority: false
    },
    {
      title: 'Estado',
      compare: null,
      priority: false
    },
  ];

  /*
  listOfData: DataItem[] = [
    {
      nombre: 'prueba',
      observacion: 'hgytfyrdy',
      estado: true
    }
  ];
*/
}
