/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Encargado, 'id'>, 'idProducto'>, schemaOptions: { title: 'NewEncargadoInProducto', exclude: [ 'id' ], optional: [ 'idProducto' ] })
 */
export interface NewEncargadoInProducto {
  fechaFinal: string;
  fechaInicial: string;
  idEmpleado?: number;
  idProducto?: number;
}
