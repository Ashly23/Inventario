import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Garantia, Producto } from 'src/app/api/models';
import { GarantiaControllerService } from 'src/app/api/services';

interface DataItem {
  id: number,
  fecha: string,
  porcentaje: string,
  observacion: string,
  descripcion: string,
  cuota: number,
  estado: boolean
}

@Component({
  selector: 'app-garantia',
  templateUrl: './garantia.component.html',
  styleUrls: ['./garantia.component.css']
})
export class GarantiaComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  garantia:Garantia[]=[];
  producto:Producto[]=[];

  constructor(
    private messageService: NzMessageService,
    private garantiaService:GarantiaControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.garantiaService.find().subscribe(data=>this.garantia=data)
    
  }

  eliminar(id: number): void {
    this.garantiaService.deleteById({ id }).subscribe(() => {
      this.garantia = this.garantia.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Garantia): void {
    if (data?.id) {
      this.formGarantia.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formGarantia.reset()
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
      fecha: [null, [Validators.required]],
      porcentaje: [null, [Validators.required]],
      observacion: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      cuota: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    this.formGarantia.setValue({ ...this.formGarantia.value, 'estado': Boolean(this.formGarantia.value.estado) })
    if (this.formGarantia.value.id) {
      this.garantiaService.updateById({ 'id': this.formGarantia.value.id, 'body': this.formGarantia.value }).subscribe(
        () => {
          //actualizar
          this.garantia = this.garantia.map(obj => {
            if (obj.id === this.formGarantia.value.id){
              return this.formGarantia.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formGarantia.reset()
        }
      )

    } else {
      //insertar
      delete this.formGarantia.value.id
      this.garantiaService.create({ body: this.formGarantia.value }).subscribe((datoAgregado) => {
        this.garantia = [...this.garantia, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formGarantia.reset()
      })
    }
    this.visible = false
   }

  formGarantia: FormGroup = this.fb.group({
    id:[],
    fecha:[],
    porcentaje:[],
    observacion:[],
    descripcion:[],
    cuota:[],
    estado:[]
  })

  //Tabla
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 0
    },
    {
      title: 'Fecha',
      compare: null,
      priority: false
    },
    {
      title: 'Porcentaje',
      compare: null,
      priority: false
    },
    {
      title: 'Observacion',
      compare: null,
      priority: false
    },
    {
      title: 'Descripcion',
      compare: null,
      priority: false
    },
    {
      title: 'Cuota',
      compare: (a: DataItem, b: DataItem) => a.cuota - b.cuota,
      priority: 2
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
      fechaInicial: '22 nov',
      fechaFinal: '22 enero',
      porcentaje: 88,
      observacion: 'ncndcbndfvb',
      descripcion: 'jdihwdhew',
      cuota: 22.5,
      estado: false
    }
  ];
  */
}

