/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: PartesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PartesWithRelations {
  capacidad?: string;
  descripcion?: string;
  estado?: boolean;
  id: number;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
  tecnologia?: string;
  tipoParte?: string;
  valor: string;
}
