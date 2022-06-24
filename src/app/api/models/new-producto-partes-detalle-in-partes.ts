/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<ProductoPartesDetalle, 'id'>, 'idPartes'>, schemaOptions: { title: 'NewProductoPartesDetalleInPartes', exclude: [ 'id' ], optional: [ 'idPartes' ] })
 */
export interface NewProductoPartesDetalleInPartes {
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  idPartes?: number;
  idProducto?: number;

  [key: string]: any;
}
