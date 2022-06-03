/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idEstadoProducto'>, schemaOptions: { title: 'NewProductoInEstadoProducto', exclude: [ 'id' ], optional: [ 'idEstadoProducto' ] })
 */
export interface NewProductoInEstadoProducto {
  anioDepreciados: number;
  etiquetaServ?: string;
  idArea?: number;
  idCategorias?: number;
  idEstadoProducto?: number;
  idFabricante?: number;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
