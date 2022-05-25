/* tslint:disable */
/* eslint-disable */
import { EncargadoWithRelations } from './encargado-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  correo: string;
  encargados?: Array<EncargadoWithRelations>;
  estado: boolean;
  id: number;
  nombre: string;
  telefono: string;
}
