/* tslint:disable */
/* eslint-disable */
import { PartesWithRelations } from './partes-with-relations';
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: FabricanteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FabricanteWithRelations {
  correo?: string;
  estado?: boolean;
  id: number;
  nombre: string;
  partes?: Array<PartesWithRelations>;
  productos?: Array<ProductoWithRelations>;
  sitioWeb?: string;
  telefono: string;
  idProducto?: number;
  idPartes?: number;
}
