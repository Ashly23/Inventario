import { Component } from '@angular/core';
import { ActivationEnd } from '@angular/router';

interface DataItem {
  id: number;
  nombre: string;
  tipoParte: string;
  capacidad: string;
  valor: number;
  tecno: string;
  descripcion: string;
  estado: string;
}

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent {
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
      title: 'Valor',
      compare: null,
      priority: false
    },
    {
      title: 'Tecnologia',
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
      id: 1234,
      nombre: 'prueba',
      tipoParte: 'prueba',
      capacidad: 'hygv',
      valor: 2500,
      tecno: 'prueba',
      descripcion: 'prueba',
      estado: 'activo'
    }
  ];
}
