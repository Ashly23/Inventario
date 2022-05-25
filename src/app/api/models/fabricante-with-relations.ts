/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: FabricanteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FabricanteWithRelations {
  correo?: string;
  estado?: boolean;
  id: number;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
  sitioWeb?: string;
  telefono: string;
}
