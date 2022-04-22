import { Component } from '@angular/core';

interface DataItem {
  id: number;
  nombre: string;
  valor: number;
  vidaUtil: number;
  valorDep: number;
  anioDep: number;
  marca: string;
  modelo: string;
  etiquetaServ: string;
  caracteristicas: string;
  idCategorias: number;
  idEstado: number;
  idEmpleado: number;
  idArea: number;
  idGarantia: number;
  idFabricante: number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  listOfColumn = [
    {
      title: 'Nombre',
      compare: null,
      priority: false
    },
    {
      title: 'Valor',
      compare: (a: DataItem, b: DataItem) => a.valor - b.valor,
      priority: 4
    },
    {
      title: 'Vida Util',
      compare: (a: DataItem, b: DataItem) => a.vidaUtil - b.vidaUtil,
      priority: 3
    },
    {
      title: 'Años Depreciado',
      compare: (a: DataItem, b: DataItem) => a.valorDep - b.valorDep,
      priority: 2
    },
    {
      title: 'Marca',
      compare: null,
      priority: false
    },
    {
      title: 'Modelo',
      compare: null,
      priority: false
    },
    {
      title: 'Etiqueta de Servicio',
      compare: null,
      priority: false
    },

  ];
  listOfData: DataItem[] = [
    {
    id: 8907,
    nombre: 'Computadora',
    valor: 4000,
    vidaUtil: 5,
    valorDep: 2.7,
    anioDep: 2025,
    marca: 'dell',
    modelo: 'nfdbhhubd',
    etiquetaServ: 'jdihcd',
    caracteristicas: 'hdsidu',
    idCategorias: 1,
    idEstado: 2,
    idEmpleado: 3,
    idArea: 4,
    idGarantia: 5,
    idFabricante: 6
   },
 ]; 
}