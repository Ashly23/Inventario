/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idFabricante'>, schemaOptions: { title: 'NewProductoInFabricante', exclude: [ 'id' ], optional: [ 'idFabricante' ] })
 */
export interface NewProductoInFabricante {
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
