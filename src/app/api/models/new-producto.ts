/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'id'>, schemaOptions: { title: 'NewProducto', exclude: [ 'id' ] })
 */
export interface NewProducto {
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
