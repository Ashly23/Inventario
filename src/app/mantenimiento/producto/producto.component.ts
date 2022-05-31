import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Area, Categorias, EstadoProducto, Fabricante, Garantia, Partes, Producto } from 'src/app/api/models';
import { AreaControllerService, CategoriasControllerService, EstadoProductoControllerService, 
      FabricanteControllerService, GarantiaControllerService, PartesControllerService, ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  nombre: string;
  valor: number;
  vidaUtil: number;
  valorDepreciado: number;
  anioDepreciados: number;
  modelo: string;
  etiquetaServ: string;
  idCategorias: number;
  idEstado: number;
  idArea: number;
  idPartes: number;
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
  area:Area[]=[];
  categorias:Categorias[]=[];
  estado:EstadoProducto[]=[];
  partes:Partes[]=[];

  constructor(
    private messageService: NzMessageService,
    private productoService:ProductoControllerService,
    private areaService:AreaControllerService,
    private categoriasService:CategoriasControllerService,
    private estadoService:EstadoProductoControllerService,
    private partesService:PartesControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.productoService.find().subscribe(data=>this.producto=data)
    this.areaService.find().subscribe(data=>this.area=data)
    this.categoriasService.find().subscribe(data=>this.categorias=data)
    this.estadoService.find().subscribe(data=>this.estado=data)
    this.partesService.find().subscribe(data=>this.partes=data)
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

  mostrar(data?:Producto): void {
    if (data?.id) {
      this.formProducto.setValue({ ... data})
    }
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
      vidaUtil: [0, [Validators.required]],
      valorDepreciado: [null, [Validators.required]],
      anioDepreciados: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      etiquetaServ: [null, [Validators.required]],
      idArea: [null, [Validators.required]],
      idCategoria: [null, [Validators.required]],
      idEstadoProducto: [null, [Validators.required]],
      idPartes: [null, [Validators.required]]
    });
  } 

  guardar(): void {
    this.formProducto.setValue({ ...this.formProducto.value })
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
      console.log({ body: this.formProducto.value })
      this.productoService.create({ body: this.formProducto.value }).subscribe((datoAgregado) => {
        this.producto = [...this.producto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formProducto.reset()
      })
    }
    this.visible = false
   }

  formProducto: FormGroup = this.fb.group({
    id: [],
    idArea:[],
    idCategorias:[],
    idEstadoProducto:[],
    idPartes:[],
    nombre: [],
    valor: [],
    vidaUtil: [],
    valorDepreciado: [],
    anioDepreciados: [],
    modelo: [],
    etiquetaServ: [],
  })

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
      title: 'Modelo',
      compare: null,
      priority: false
    },
    {
      title: 'Etiqueta de Servicio',
      compare: null,
      priority: false
    },
    {
      title: 'Acciones',
      compare: null,
      priority: false
    }
    

  ];
/*
  listOfData: DataItem[] = [
    {
    nombre: 'Computadora',
    valor: 4000,
    vidaUtil: 5,
    valorDepreciado: 2.7,
    anioDepreciados: 2025,
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