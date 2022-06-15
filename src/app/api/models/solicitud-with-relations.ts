/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: SolicitudWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SolicitudWithRelations {
  Empleados?: EmpleadoWithRelations;
  descripcion: string;
  id: number;
  idEmpleado?: number;
  partes: string;
}
