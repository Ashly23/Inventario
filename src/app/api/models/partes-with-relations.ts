/* tslint:disable */
/* eslint-disable */
import { FabricanteWithRelations } from './fabricante-with-relations';
import { ProductoPartesDetalleWithRelations } from './producto-partes-detalle-with-relations';
import { SolicitudWithRelations } from './solicitud-with-relations';

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
  solicitud?: Array<SolicitudWithRelations>;
  tecnologia?: string;
  tipoParte?: string;
}
