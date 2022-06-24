import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Fabricante, Partes, PartesWithRelations, Producto, ProductoPartesDetalle } from 'src/app/api/models';
import { FabricanteControllerService, PartesControllerService, ProductoPartesDetalleControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  nombre: string;
  idFabricante:number;
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
export class PartesComponent implements OnInit /*OnChanges*/{
  isVisible = false;
  size: 'large' | 'default' = 'default';
  validateForm !: FormGroup;
  visible: boolean = false;
  visibleDrawer = false;
  partes:PartesWithRelations[]=[];
  fabricante:Fabricante[]=[];
  detalles:ProductoPartesDetalle[]=[];
  @Input() productoPosicion!: Producto;
  @Input() detallePartes: any[] = [];

  constructor(
    private messageService: NzMessageService,
    private partesService:PartesControllerService,
    private fabricanteService:FabricanteControllerService,
    private detallesService:ProductoPartesDetalleControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.filtrar();
    this.partesService.find(
      {
        "filter": `{"include": [{"relation: "Fabricantes"}]}`
      }
    ).subscribe(data=> {
      console.log(data)
      this.partes = data
    })
    this.detallesService.find().subscribe(data=>this.detalles=data)
    this.fabricanteService.find().subscribe(data=>this.fabricante=data)
  }
  
  filtrar(){
    for(let i = 0; i < this.detallePartes.length; i++){
      if(this.detallePartes[i].idProducto === this.productoPosicion.id){
        this.partes = [... this.partes, this.detallePartes[i]];
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
      return `Partes del Producto`;
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
      tipoParte: [null, [Validators.required]],
      capacidad: [null, [Validators.required]],
      tecnologia: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  guardar(): void {
    this.formPartes.setValue({ ...this.formPartes.value, 'estado': Boolean(this.formPartes.value.estado) })
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
        console.log(this.partes)
        this.messageService.success('Registro creado con exito!')
        this.formPartes.reset()
      })
    }
    this.visible = false
   }

  formPartes: FormGroup = this.fb.group({
      id:[],
      nombre:[],
      idFabricante:[],
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
      compare: null,
      priority: false
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
