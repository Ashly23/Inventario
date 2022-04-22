import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number;
  nombre: string;
  observacion: string;
  estado: boolean;
}

@Component({
  selector: 'app-estado-producto',
  templateUrl: './estado-producto.component.html',
  styleUrls: ['./estado-producto.component.css']
})
export class EstadoProductoComponent implements OnInit {
  
  constructor(){

  }

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
      title: 'Observacion',
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
      id: 2654,
      nombre: 'prueba',
      observacion: 'hgytfyrdy',
      estado: true
    }
  ];

}
