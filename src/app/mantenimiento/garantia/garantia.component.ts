import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DataItem {
  fechaInicial: string,
  fechaFinal: string,
  porcentaje: number,
  observacion: string,
  descripcion: string,
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

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
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
      fechaInicial: [null, [Validators.required]],
      fechaFinal: [null, [Validators.required]],
      porcentaje: [null, [Validators.required]],
      observacion: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      cuota: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  } 

  //Tabla
  listOfColumn = [
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
      compare: (a: DataItem, b: DataItem) => a.porcentaje - b.porcentaje,
      priority: 2
    },
    {
      title: 'Observacion',
      compare: null,
      priority: false
    },
    {
      title: 'Descripcion',
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
}
