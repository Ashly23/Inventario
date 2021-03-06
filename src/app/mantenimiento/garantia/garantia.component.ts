import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Garantia, GarantiaWithRelations, Producto } from 'src/app/api/models';
import { GarantiaControllerService, ProductoControllerService } from 'src/app/api/services';
import { DatePipe } from '@angular/common';

interface DataItem {
  id: number,
  idProducto: number,
  fechaInicial: Date,
  fechaFinal: Date,
  porcentaje: string,
  observacion: string,
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
      //console.log("DATOS",data)
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
        fechaInicial:(new Date(data.fechaInicial)).toISOString(),
        fechaFinal:(new Date(data.fechaFinal)).toISOString(),
        porcentaje: data.porcentaje,
        observacion: data.observacion,
        estado: String(data.estado)
      })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formGarantia.reset()
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

  CleanForm() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      idProducto: [null, [Validators.required]],
      fechaInicial: [null, [Validators.required]],
      fechaFinal: [null, [Validators.required]],
      porcentaje: [null, [Validators.required]],
      observacion: [null, [Validators.required]],
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
    fechaInicial: [],
    fechaFinal: [],
    porcentaje: [],
    observacion: [],
    estado: []
  })

  //Tabla
  listOfColumn = [
    {
      title: '# de Serie',
      compare: null,
      priority: false
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

