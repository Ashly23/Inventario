/* tslint:disable */
/* eslint-disable */
import { FabricanteWithRelations } from './fabricante-with-relations';

/**
 * (tsType: PartesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PartesWithRelations {
  Fabricantes?: FabricanteWithRelations;
  capacidad?: string;
  estado?: boolean;
  id: number;
  idFabricante?: number;
  nombre: string;
  tecnologia?: string;
  tipoParte?: string;
}
