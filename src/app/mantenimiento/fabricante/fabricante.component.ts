import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Fabricante } from 'src/app/api/models';
import { FabricanteControllerService } from 'src/app/api/services';

interface DataItem {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  sitioWeb: string;
  estado: boolean;
}

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  visible: boolean = false;
  fabricante:Fabricante[]=[];

  constructor(
    private messageService: NzMessageService,
    private fabricanteService:FabricanteControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
    this.fabricanteService.find().subscribe(data => this.fabricante = data)
  }

  eliminar(id: number): void {
    this.fabricanteService.deleteById({ id }).subscribe(() => {
      this.fabricante = this.fabricante.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  mostrar(data?: Fabricante): void {
    if (data?.id) {
      this.formFabricante.setValue({ ...data, 'estado': String(data.estado) })
    }
    this.visible = true
  }

  ocultar(): void {
    this.visible = false
    this.formFabricante.reset()
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
      correo: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      sitioWeb: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  } 

  guardar(): void {
    this.formFabricante.setValue({ ...this.formFabricante.value, 'estado': Boolean(this.formFabricante.value.estado) })
    if (this.formFabricante.value.id) {
      this.fabricanteService.updateById({ 'id': this.formFabricante.value.id, 'body': this.formFabricante.value }).subscribe(
        () => {
          //actualizar
          this.fabricante = this.fabricante.map(obj => {
            if (obj.id === this.formFabricante.value.id){
              return this.formFabricante.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formFabricante.reset()
        }
      )

    } else {
      //insertar
      delete this.formFabricante.value.id
      this.fabricanteService.create({ body: this.formFabricante.value }).subscribe((datoAgregado) => {
        this.fabricante = [...this.fabricante, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formFabricante.reset()
      })
    }
    this.visible = false
   }

  formFabricante: FormGroup = this.fb.group({
    id:[],
    nombre:[],
    correo:[],
    telefono:[],
    sitioWeb:[],
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
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Correo',
      compare: null,
      priority: false
    },
    {
      title: 'Telefono',
      compare: null,
      priority: false
    },
    {
      title: 'sitioWeb',
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
      nombre: 'pueba4',
      correo: 'prueba4@gmail.com',
      telefono: 98004433,
      sitioWeb: 'hcdushfcud',
      estado: true
    }
  ];
*/

}
