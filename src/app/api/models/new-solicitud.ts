/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Solicitud, 'id'>, schemaOptions: { title: 'NewSolicitud', exclude: [ 'id' ] })
 */
export interface NewSolicitud {
  descripcion: string;
  idEmpleado?: number;
  partes: string;
}
