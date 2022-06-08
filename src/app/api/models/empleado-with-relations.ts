/* tslint:disable */
/* eslint-disable */
import { AreaWithRelations } from './area-with-relations';
import { EncargadoWithRelations } from './encargado-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  Areas?: AreaWithRelations;
  correo: string;
  encargados?: Array<EncargadoWithRelations>;
  estado: boolean;
  id: number;
  nombre: string;
  telefono: string;
}
