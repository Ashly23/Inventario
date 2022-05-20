/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: ProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductoWithRelations {
  anioDepreciados: number;
  etiquetaServ?: string;
  id: number;
  idArea: number;
  idCategorias: number;
  idEstadoProducto: number;
  idFabricante: number;
  idEmpleado: number;
  idGarantia: number;
  idPartes: number;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
