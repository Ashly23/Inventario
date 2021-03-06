/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: GarantiaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface GarantiaWithRelations {
  Productos?: ProductoWithRelations;
  cuota?: string;
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  id: number;
  idProducto?: number;
  observacion?: string;
  porcentaje?: string;
}
