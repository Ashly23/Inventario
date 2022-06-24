/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<ProductoPartesDetalle, 'id'>, 'idProducto'>, schemaOptions: { title: 'NewProductoPartesDetalleInProducto', exclude: [ 'id' ], optional: [ 'idProducto' ] })
 */
export interface NewProductoPartesDetalleInProducto {
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  idPartes?: number;
  idProducto?: number;

  [key: string]: any;
}
