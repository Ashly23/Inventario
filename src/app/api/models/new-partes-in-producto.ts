/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Partes, 'id'>, 'idProducto'>, schemaOptions: { title: 'NewPartesInProducto', exclude: [ 'id' ], optional: [ 'idProducto' ] })
 */
export interface NewPartesInProducto {
  capacidad?: string;
  estado?: boolean;
  idFabricante?: number;
  idProducto?: number;
  nombre: string;
  tecnologia?: string;
  tipoParte?: string;
}
