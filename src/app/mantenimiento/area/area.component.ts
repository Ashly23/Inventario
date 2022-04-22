import { Component } from '@angular/core';

interface DataItem {
  id: number;
  nombre: string;
  descrip: string;
  estado: boolean;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 1
    },
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
      id: 2353,
      nombre: 'prueba2',
      descrip: 'cjcndjncjndwijhd',
      estado: true
    },
  ];
}
