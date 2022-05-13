import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/app/api/models';
import { AreaControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  area:Area[]=[];

  constructor(
    private messageService: NzMessageService,
    private areaService:AreaControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void  {
    this.CleanForm();
    this.areaService.find().subscribe(data=>this.area=data)
  }

  eliminar(id: number): void {
    this.areaService.deleteById({ id }).subscribe(() => {
      this.area = this.area.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Area): void {
    if (data?.id) {
      this.formArea.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formArea.reset()
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
      descripcion: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  } 

  guardar(): void {
    this.formArea.setValue({ ...this.formArea.value, 'estado': Boolean(this.formArea.value.estado) })
    if (this.formArea.value.id) {
      this.areaService.updateById({ 'id': this.formArea.value.id, 'body': this.formArea.value }).subscribe(
        () => {
          //actualizar
          this.area = this.area.map(obj => {
            if (obj.id === this.formArea.value.id){
              return this.formArea.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formArea.reset()
        }
      )

    } else {
      //insertar
      delete this.formArea.value.id
      this.areaService.create({ body: this.formArea.value }).subscribe((datoAgregado) => {
        this.area = [...this.area, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formArea.reset()
      })
    }
    this.visible = false
   }

  formArea: FormGroup = this.fb.group({
    id: [],
    nombre: [],
    descripcion: [],
    estado: []
  })
  
  //Tabla
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 0
    },
    {
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Descripcion',
      compare: null,
      priority: false
    },
    {
      title: 'Estado',
      compare: null,
      priority: false
    },
  ];
  

  listOfData: DataItem[] = [
    {
      id: 1234,
      nombre: 'prueba1',
      descripcion: 'prueba',
      estado: true
    },
  ];

}
