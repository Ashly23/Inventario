/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idArea'>, schemaOptions: { title: 'NewProductoInArea', exclude: [ 'id' ], optional: [ 'idArea' ] })
 */
export interface NewProductoInArea {
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
