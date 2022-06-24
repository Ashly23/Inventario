/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';
import { PartesWithRelations } from './partes-with-relations';
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: SolicitudWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SolicitudWithRelations {
  Empleados?: EmpleadoWithRelations;
  Partes?: PartesWithRelations;
  Productos?: ProductoWithRelations;
  cotizacion: number;
  estado: boolean;
  fechaSolicitud: string;
  id: number;
  idEmpleado?: number;
  idPartes?: number;
  idProducto?: number;
}
