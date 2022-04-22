import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number,
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

  constructor() { }

  ngOnInit(): void {
  }

  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 3
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
      priority: true
    },
  ];
  listOfData: DataItem[] = [
    {
      id: 9887,
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
