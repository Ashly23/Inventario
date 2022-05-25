/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: AreaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface AreaWithRelations {
  descripcion: string;
  estado: boolean;
  id: number;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
}
