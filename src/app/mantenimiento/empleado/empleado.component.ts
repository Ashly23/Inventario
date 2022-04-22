import { Component } from '@angular/core';

interface DataItem {
  id: number;
  nombre: string;
  correo: string;
  telefono: number;
  estado: boolean;
}

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
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
      title: 'Estado',
      compare: null,
      priority: false
    }
  ];
  listOfData: DataItem[] = [
    {
      id: 4567,
      nombre: 'prueba3',
      correo: 'prueba3@gmail.com',
      telefono: 98780010,
      estado: true
    }
  ];
}
