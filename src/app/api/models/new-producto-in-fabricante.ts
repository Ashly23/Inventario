/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'idFabricante'>, schemaOptions: { title: 'NewProductoInFabricante', exclude: [ 'id' ], optional: [ 'idFabricante' ] })
 */
export interface NewProductoInFabricante {
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
