/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'id'>, schemaOptions: { title: 'NewProducto', exclude: [ 'id' ] })
 */
export interface NewProducto {
  anioDepreciados: number;
  etiquetaServ?: string;
  idArea: number;
  idCategorias: number;
  idEmpleadoProducto: number;
  idEstadoProducto: number;
  idFabricante: number;
  idGarantia: number;
  idPartes: number;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
