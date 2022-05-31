/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: GarantiaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface GarantiaWithRelations {
  cuota?: string;
  descripcion?: string;
  estado: boolean;
  fecha: string;
  id: number;
  observacion?: string;
  porcentaje?: string;
  Productos?: ProductoWithRelations;
}
