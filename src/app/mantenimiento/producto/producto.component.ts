import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Producto } from 'src/app/api/models';
import { ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  nombre: string;
  valor: number;
  vidaUtil: number;
  valorDepreciado: number;
  anioDepreciados: number;
  marca: string;
  modelo: string;
  etiquetaServ: string;
  idCategorias: number;
  idEstado: number;
  idEmpleado: number;
  idArea: number;
  idGarantia: number;
  idFabricante: number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  producto:Producto[]=[];

  constructor(
    private messageService: NzMessageService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
  }

  eliminar(id: number): void {
    this.productoService.deleteById({ id }).subscribe(() => {
      this.producto = this.producto.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Producto): void {
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formProducto.reset()
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
      valor: [null, [Validators.required]],
      vidaUtil: [null, [Validators.required]],
      valorDepreciado: [null, [Validators.required]],
      anioDepreciados: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      etiquetaServ: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    this.formProducto.setValue({ ...this.formProducto.value, 'estado': Boolean(this.formProducto.value.estado) })
    if (this.formProducto.value.id) {
      this.productoService.updateById({ 'id': this.formProducto.value.id, 'body': this.formProducto.value }).subscribe(
        () => {
          //actualizar
          this.producto = this.producto.map(obj => {
            if (obj.id === this.formProducto.value.id){
              return this.formProducto.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formProducto.reset()
        }
      )

    } else {
      //insertar
      delete this.formProducto.value.id
      this.productoService.create({ body: this.formProducto.value }).subscribe((datoAgregado) => {
        this.producto = [...this.producto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formProducto.reset()
      })
    }
    this.visible = false
   }

  formProducto: FormGroup = this.fb.group({
    nombre: [],
    valor: [],
    vidaUtil: [],
    valorDepreciado: [],
    anioDepreciados: [],
    marca: [],
    modelo: [],
    etiquetaServ: [],
  })

  listOfColumn = [
    {
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Valor',
      compare: (a: DataItem, b: DataItem) => a.valor - b.valor,
      priority: 4
    },
    {
      title: 'Vida Util',
      compare: (a: DataItem, b: DataItem) => a.vidaUtil - b.vidaUtil,
      priority: 3
    },
    {
      title: 'Valor Depreciado',
      compare: (a: DataItem, b: DataItem) => a.valorDepreciado - b.valorDepreciado,
      priority: 2
    },
    {
      title: 'Años Depreciado',
      compare: (a: DataItem, b: DataItem) => a.anioDepreciados - b.anioDepreciados,
      priority: 2
    },
    {
      title: 'Marca',
      compare: null,
      priority: false
    },
    {
      title: 'Modelo',
      compare: null,
      priority: false
    },
    {
      title: 'Etiqueta de Servicio',
      compare: null,
      priority: false
    },
  ];
/*
  listOfData: DataItem[] = [
    {
    nombre: 'Computadora',
    valor: 4000,
    vidaUtil: 5,
    valorDepreciado: 2.7,
    anioDepreciados: 2025,
    marca: 'dell',
    modelo: 'nfdbhhubd',
    etiquetaServ: 'jdihcd',

    idCategorias: 1,
    idEstado: 2,
    idEmpleado: 3,
    idArea: 4,
    idGarantia: 5,
    idFabricante: 6
   },
 ]; 
 */
}