/* tslint:disable */
/* eslint-disable */
import { PartesWithRelations } from './partes-with-relations';
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: ProductoPartesDetalleWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductoPartesDetalleWithRelations {
  Partes?: PartesWithRelations;
  Productos?: ProductoWithRelations;
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  id: number;
  idParte?: number;
  idProducto?: number;

  [key: string]: any;
}
