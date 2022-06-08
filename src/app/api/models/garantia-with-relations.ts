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
  fechaInicial: Date;
  fechaFinal: Date;
  id: number;
  idProducto?: number;
  observacion?: string;
  porcentaje?: string;
}
