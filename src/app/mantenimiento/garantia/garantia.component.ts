import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Garantia, GarantiaWithRelations, Producto } from 'src/app/api/models';
import { GarantiaControllerService, ProductoControllerService } from 'src/app/api/services';
import { DatePipe } from '@angular/common';

interface DataItem {
  id: number,
  idProducto: number,
  fecha: Date,
  porcentaje: string,
  observacion: string,
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
  garantia: GarantiaWithRelations[] = [];
  producto: Producto[] = [];
  pipe = new DatePipe('en-US');

  constructor(
    private messageService: NzMessageService,
    private garantiaService: GarantiaControllerService,
    private productoService: ProductoControllerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CleanForm();
    this.garantiaService.find(
      {
        "filter": `{"include": [{"relation": "Productos"}]}`
      }
    ).subscribe(data => {
      this.garantia = data
     // console.log("DATOS",data)
    })
    this.productoService.find().subscribe(data => this.producto = data)
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
      this.formGarantia.setValue({
        id: data.id,
        idProducto: data.idProducto,
        fecha:(new Date(data.fecha)).toISOString(),
        porcentaje: data.porcentaje,
        observacion: data.observacion,
        cuota: data.cuota,
        estado: data.estado
      })
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

  CleanForm() {
    this.validateForm = this.fb.group({
      idProducto: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
      porcentaje: [null, [Validators.required]],
      observacion: [null, [Validators.required]],
      cuota: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  }

  guardar(): void {
    this.formGarantia.setValue({ ...this.formGarantia.value, 'estado': Boolean(this.formGarantia.value.estado) })
    if (this.formGarantia.value.id) {
      this.garantiaService.updateById({ 'id': this.formGarantia.value.id, 'body': this.formGarantia.value }).subscribe(
        (data) => {
          //actualizar mm
          this.garantia = this.garantia.map(obj => {
            if (obj.id === this.formGarantia.value.id) {
              return data;
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
    id: [],
    idProducto: [],
    fecha: [],
    porcentaje: [],
    observacion: [],
    cuota: [],
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
      title: 'Producto',
      compare: null,
      priority: false
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

