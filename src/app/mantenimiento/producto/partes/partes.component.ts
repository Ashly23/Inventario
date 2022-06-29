import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Fabricante, Partes, PartesWithRelations, Producto } from 'src/app/api/models';
import { FabricanteControllerService, PartesControllerService, ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  nombre: string;
  idFabricante:number;
  idProducto: number;
  tipoParte: string;
  capacidad: string;
  tecnologia: string;
  estado: boolean;
}

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit, OnChanges {
  isVisible = false;
  size: 'large' | 'default' = 'default';
  validateForm !: FormGroup;
  partesAux: any[] = [];
  visible: boolean = false;
  visibleDrawer = false;
  partes:PartesWithRelations[]=[];
  fabricante:Fabricante[]=[];
  producto:Producto[]=[];
  @Input() productoPosicion!: Producto;
  @Input() detallePartes: any[] = [];

  constructor(
    private messageService: NzMessageService,
    private partesService:PartesControllerService,
    private fabricanteService:FabricanteControllerService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.filtrar();
    console.log(this.partes)
    this.fabricanteService.find().subscribe(data=>this.fabricante=data)
    this.productoService.find().subscribe(data=>this.producto=data)
    
    
    this.partesService.find(
      {
        "filter": `{"include": [{"relation": "Productos"}, {"relation": "Fabricantes"}]}`
      }
    ).subscribe((data: any) => {
      console.log('partes');

      console.log(data[0]);
      this.partesAux = data;
      this.filtrar();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
   /* if(this.partes){
      this.filtrar();
    }
    */
  }
  
  filtrar(){
    this.partes.length = 0;
    for(let i = 0; i < this.partesAux.length; i++){
      if(this.partesAux[i].idProducto === this.productoPosicion.id){
        
        this.partes = [... this.partes, this.partesAux[i]];
      }
    }
    this.partes = [... this.partes];
  }

  eliminar(id: number): void {
    this.partesService.deleteById({ id }).subscribe(() => {
      this.partes = this.partes.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

    //Drawer
    get title(): string {
      return `Partes`;
    }
  
    showDefault(): void {
      this.size = 'default';
      this.open();
    }
  
    showLarge(): void {
      this.size = 'large';
      this.open();
    }
  
    open(): void {
      this.visibleDrawer = true;
    }
  
    close(): void {
      this.visibleDrawer = false;
    }
    //FD

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Partes): void {
    if (data?.id) {
      this.formPartes.setValue({ 
        id: data.id,
        nombre: data.nombre,
        idFabricante: data.idFabricante,
        idProducto: data.idProducto,
        tipoParte: data.tipoParte,
        capacidad: data.capacidad,
        tecnologia: data.tecnologia,
        estado: String(data.estado)
      })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formPartes.reset()
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
      nombre: [null, [Validators.required]],
      idFabricante: [null, [Validators.required]],
      idProducto: [null, [Validators.required]],
      tipoParte: [null, [Validators.required]],
      capacidad: [null, [Validators.required]],
      tecnologia: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    console.log('datos del formulario', this.formPartes.value)
    console.log('datos del input', this.productoPosicion)
    this.formPartes.setValue({ ...this.formPartes.value,'estado': Boolean(this.formPartes.value.estado), idProducto:this.productoPosicion.id })
    if (this.formPartes.value.id) {
      this.partesService.updateById({ 'id': this.formPartes.value.id, 'body': this.formPartes.value }).subscribe(
        (data) => {
          //actualizar
          this.partes = this.partes.map(obj => {
            if (obj.id === this.formPartes.value.id){
              return data;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formPartes.reset()
        }
      )

    } else {
      //insertar
      delete this.formPartes.value.id
      this.partesService.create({ body: this.formPartes.value }).subscribe((datoAgregado) => {
        this.partes = [...this.partes, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formPartes.reset()
      })
    }
    this.visible = false
    console.log(this.formPartes.value)
   }

  formPartes: FormGroup = this.fb.group({
      id:[],
      nombre:[],
      idFabricante:[],
      idProducto:[],
      tipoParte:[],
      capacidad:[],
      tecnologia:[],
      estado:[]
  })

  //Tabla
  listOfColumn = [
    {
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Fabricante',
      compare: (a: DataItem, b: DataItem) => a.idFabricante - b.idFabricante,
      priority: 0
    },
    {
      title: 'Tipo del producto',
      compare: null,
      priority: false
    },
    {
      title: 'Capacidad',
      compare: null,
      priority: false
    },
    {
      title: 'Tecnologia',
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
      tipoParte: 'prueba',
      capacidad: 'hygv',
      valor: 2500,
      tecnologia: 'prueba',
      descripcion: 'prueba',
      estado: true
    }
  ];
  */
}
