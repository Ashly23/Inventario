/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: EstadoProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EstadoProductoWithRelations {
  estado: boolean;
  id: number;
  nombre: string;
  observacion: string;
  productos?: Array<ProductoWithRelations>;
}
