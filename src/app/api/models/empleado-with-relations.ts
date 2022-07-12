/* tslint:disable */
/* eslint-disable */
import { AreaWithRelations } from './area-with-relations';
import { EncargadoWithRelations } from './encargado-with-relations';
import { ProductoWithRelations } from './producto-with-relations';
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
  productos?: Array<ProductoWithRelations>;
  solicitud?: Array<SolicitudWithRelations>;
  telefono: string;
}
