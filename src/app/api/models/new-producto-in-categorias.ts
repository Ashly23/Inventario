/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idCategorias'>, schemaOptions: { title: 'NewProductoInCategorias', exclude: [ 'id' ], optional: [ 'idCategorias' ] })
 */
export interface NewProductoInCategorias {
  anioDepreciados: number;
  etiquetaServ?: string;
  fechaCompra: string;
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
