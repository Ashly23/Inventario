import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Partes, Producto } from 'src/app/api/models';
import { PartesControllerService, ProductoControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  nombre: string;
  tipoParte: string;
  capacidad: string;
  valor: string;
  tecnologia: string;
  descripcion: string;
  estado: boolean;
}

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit{
  isVisible = false;
  size: 'large' | 'default' = 'default';
  validateForm !: FormGroup;
  visible: boolean = false;
  visibleDrawer = false;
  partes:Partes[]=[];
  producto:Producto[]=[];

  constructor(
    private messageService: NzMessageService,
    private partesService:PartesControllerService,
    private productoService:ProductoControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.partesService.find().subscribe(data=>this.partes=data)
    this.productoService.find().subscribe(data=>this.producto=data)
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
      this.formPartes.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formPartes.reset()
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
      id: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
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
        () => {
          //actualizar
          this.partes = this.partes.map(obj => {
            if (obj.id === this.formPartes.value.id){
              return this.formPartes.value;
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
      console.log({ body: this.formPartes.value })
      this.partesService.create({ body: this.formPartes.value }).subscribe((datoAgregado) => {
        this.partes = [...this.partes, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formPartes.reset()
      })
    }
    this.visible = false
   }

  formPartes: FormGroup = this.fb.group({
      id:[],
      nombre: [],
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
