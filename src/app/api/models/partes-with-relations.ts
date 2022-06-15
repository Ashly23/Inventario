/* tslint:disable */
/* eslint-disable */
import { FabricanteWithRelations } from './fabricante-with-relations';
import { ProductoPartesDetalleWithRelations } from './producto-partes-detalle-with-relations';

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
  productoPartesDetalles?: Array<ProductoPartesDetalleWithRelations>;
  tecnologia?: string;
  tipoParte?: string;
}
