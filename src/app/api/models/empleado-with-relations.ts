/* tslint:disable */
/* eslint-disable */
import { AreaWithRelations } from './area-with-relations';
import { EncargadoWithRelations } from './encargado-with-relations';
import { SolicitudWithRelations } from './solicitud-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  Areas?: AreaWithRelations;
  correo: string;
  encargados?: Array<EncargadoWithRelations>;
  estado: boolean;
  id: number;
  idArea?: number;
  nombre: string;
  solicitud?: Array<SolicitudWithRelations>;
  telefono: string;
}
