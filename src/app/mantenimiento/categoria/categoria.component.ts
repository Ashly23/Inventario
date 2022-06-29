import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorias } from 'src/app/api/models';
import { CategoriasControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  validateForm !: FormGroup;
  visible: boolean = false;
  categorias:Categorias[]=[];

  constructor(
    private messageService: NzMessageService,
    private categoriasService:CategoriasControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.categoriasService.find().subscribe(data=>this.categorias=data)
  }

  eliminar(id: number): void {
    this.categoriasService.deleteById({ id }).subscribe(() => {
      this.categorias = this.categorias.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Categorias): void {
    if (data?.id) {
      this.formCategorias.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formCategorias.reset()
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
      descripcion: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  } 

  guardar(): void {
    this.formCategorias.setValue({ ...this.formCategorias.value, 'estado': Boolean(this.formCategorias.value.estado) })
    if (this.formCategorias.value.id) {
      this.categoriasService.updateById({ 'id': this.formCategorias.value.id, 'body': this.formCategorias.value }).subscribe(
        () => {
          //actualizar
          this.categorias = this.categorias.map(obj => {
            if (obj.id === this.formCategorias.value.id){
              return this.formCategorias.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formCategorias.reset()
        }
      )

    } else {
      //insertar
      delete this.formCategorias.value.id
      //console.log({ body: this.formCategorias.value })
      this.categoriasService.create({ body: this.formCategorias.value }).subscribe((datoAgregado) => {
        this.categorias = [...this.categorias, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formCategorias.reset()
      })
    }
    this.visible = false
   }

  formCategorias: FormGroup = this.fb.group({
    id: [],
    nombre: [],
    descripcion: [],
    estado: []
  })

  //Tabla
  listOfColumn = [
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
/*
  listOfData: DataItem[] = [
    {
      nombre: 'It',
      descripcion: 'fjdfhfjhfdij',
      estado: true
    }
  ];
*/
}
