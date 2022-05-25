/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: CategoriasWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CategoriasWithRelations {
  descripcion?: string;
  estado: boolean;
  id: number;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
}
