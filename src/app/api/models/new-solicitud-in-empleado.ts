/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Solicitud, 'id'>, 'idEmpleado'>, schemaOptions: { title: 'NewSolicitudInEmpleado', exclude: [ 'id' ], optional: [ 'idEmpleado' ] })
 */
export interface NewSolicitudInEmpleado {
  descripcion: string;
  idEmpleado?: number;
  partes: string;
}
