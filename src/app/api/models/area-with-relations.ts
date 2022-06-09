/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';
import { ProductoWithRelations } from './producto-with-relations';

/**
 * (tsType: AreaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface AreaWithRelations {
  descripcion: string;
  empleados?: Array<EmpleadoWithRelations>;
  estado: boolean;
  id: number;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
}
