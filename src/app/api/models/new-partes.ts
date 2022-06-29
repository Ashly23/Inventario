/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Partes, 'id'>, schemaOptions: { title: 'NewPartes', exclude: [ 'id' ] })
 */
export interface NewPartes {
  capacidad?: string;
  estado?: boolean;
  idFabricante?: number;
  idProducto?: number;
  nombre: string;
  tecnologia?: string;
  tipoParte?: string;
}
