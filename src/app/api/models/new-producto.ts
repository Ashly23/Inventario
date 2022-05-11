/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'id'>, schemaOptions: { title: 'NewProducto', exclude: [ 'id' ] })
 */
export interface NewProducto {
  anioDepreciados: number;
  caracteristicas?: string;
  etiquetaServ?: string;
  idArea: number;
  idCategorias: number;
  idEmpleado: number;
  idEstadoProducto: number;
  marca?: string;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
