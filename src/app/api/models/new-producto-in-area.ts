/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idArea'>, schemaOptions: { title: 'NewProductoInArea', exclude: [ 'id' ], optional: [ 'idArea' ] })
 */
export interface NewProductoInArea {
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
