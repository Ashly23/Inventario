import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/app/api/models';
import { AreaControllerService } from 'src/app/api/services';

interface DataItem {
  nombre: string;
  descripcion: string;
  estado: boolean;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;

  area:Area[]=[];

  constructor(
    private areaService:AreaControllerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void  {
    this.CleanForm();
    this.areaService.find().subscribe(data=>this.area=data)
  }

  formProducto: FormGroup = this.fb.group({
    id: [],
    nombre: [],
    descripcion: [],
    estado: []
  })

  
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
      descripcion: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  } 
  
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

  listOfData: DataItem[] = [
    {
      nombre: 'prueba2',
      descripcion: 'cjcndjncjndwijhd',
      estado: true
    },
  ];

}
