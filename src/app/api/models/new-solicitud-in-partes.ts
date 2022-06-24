/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Solicitud, 'id'>, 'idPartes'>, schemaOptions: { title: 'NewSolicitudInPartes', exclude: [ 'id' ], optional: [ 'idPartes' ] })
 */
export interface NewSolicitudInPartes {
  cotizacion: number;
  estado: boolean;
  fechaSolicitud: string;
  idEmpleado?: number;
  idPartes?: number;
  idProducto?: number;
}
