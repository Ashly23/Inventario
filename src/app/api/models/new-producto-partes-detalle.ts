/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ProductoPartesDetalle, 'id'>, schemaOptions: { title: 'NewProductoPartesDetalle', exclude: [ 'id' ] })
 */
export interface NewProductoPartesDetalle {
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  idPartes?: number;
  idProducto?: number;

  [key: string]: any;
}
