/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<ProductoPartesDetalle, 'id'>, 'idParte'>, schemaOptions: { title: 'NewProductoPartesDetalleInPartes', exclude: [ 'id' ], optional: [ 'idParte' ] })
 */
export interface NewProductoPartesDetalleInPartes {
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  idParte?: number;
  idProducto?: number;

  [key: string]: any;
}
