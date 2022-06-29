/* tslint:disable */
/* eslint-disable */
import { FabricanteWithRelations } from './fabricante-with-relations';
import { ProductoWithRelations } from './producto-with-relations';
import { SolicitudWithRelations } from './solicitud-with-relations';

/**
 * (tsType: PartesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PartesWithRelations {
  Fabricantes?: FabricanteWithRelations;
  Productos?: ProductoWithRelations;
  capacidad?: string;
  estado?: boolean;
  id: number;
  idFabricante?: number;
  idProducto?: number;
  nombre: string;
  solicitud?: Array<SolicitudWithRelations>;
  tecnologia?: string;
  tipoParte?: string;
}
