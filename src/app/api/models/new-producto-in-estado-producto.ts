/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idEstadoProducto'>, schemaOptions: { title: 'NewProductoInEstadoProducto', exclude: [ 'id' ], optional: [ 'idEstadoProducto' ] })
 */
export interface NewProductoInEstadoProducto {
  anioDepreciados: number;
  fechaCompra: string;
  idArea?: number;
  idCategorias?: number;
  idEmpleado?: number;
  idEstadoProducto?: number;
  idFabricante?: number;
  modelo?: string;
  serie?: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
