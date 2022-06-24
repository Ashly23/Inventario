/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Solicitud, 'id'>, 'idProducto'>, schemaOptions: { title: 'NewSolicitudInProducto', exclude: [ 'id' ], optional: [ 'idProducto' ] })
 */
export interface NewSolicitudInProducto {
  cotizacion: number;
  estado: boolean;
  fechaSolicitud: string;
  idEmpleado?: number;
  idPartes?: number;
  idProducto?: number;
}
