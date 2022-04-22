import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number;
  nombre: string;
  correo: string;
  telefono: number;
  sitioWeb: string;
  estado: boolean;
}

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

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
      compare: (a: DataItem, b: DataItem) => a.telefono - b.telefono,
      priority: 1
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
  listOfData: DataItem[] = [
    {
      id: 4566,
      nombre: 'pueba4',
      correo: 'prueba4@gmail.com',
      telefono: 98004433,
      sitioWeb: 'hcdushfcud',
      estado: true
    }
  ];


}
