/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idPartes'>, schemaOptions: { title: 'NewProductoInPartes', exclude: [ 'id' ], optional: [ 'idPartes' ] })
 */
export interface NewProductoInPartes {
  anioDepreciados: number;
  etiquetaServ?: string;
  idArea?: number;
  idCategorias?: number;
  idEstadoProducto?: number;
  idFabricante?: number;
  idGarantia?: number;
  idPartes?: number;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
