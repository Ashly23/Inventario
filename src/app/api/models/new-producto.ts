/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'id'>, schemaOptions: { title: 'NewProducto', exclude: [ 'id' ] })
 */
export interface NewProducto {
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
