/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: EncargadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EncargadoWithRelations {
  Empleados?: EmpleadoWithRelations;
  Productos?: ProductoWithRelations;
  fechaFinal: Date;
  fechaInicial: Date;
  id: number;
  idEmpleado?: number;
  idProducto?: number;
}
