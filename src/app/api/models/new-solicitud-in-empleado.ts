/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Solicitud, 'id'>, 'idEmpleado'>, schemaOptions: { title: 'NewSolicitudInEmpleado', exclude: [ 'id' ], optional: [ 'idEmpleado' ] })
 */
export interface NewSolicitudInEmpleado {
  cotizacion: number;
  estado: boolean;
  fechaSolicitud: string;
  idEmpleado?: number;
  idPartes?: number;
  idProducto?: number;
}
