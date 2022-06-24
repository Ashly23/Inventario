/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Solicitud, 'id'>, schemaOptions: { title: 'NewSolicitud', exclude: [ 'id' ] })
 */
export interface NewSolicitud {
  cotizacion: number;
  estado: boolean;
  fechaSolicitud: string;
  idEmpleado?: number;
  idPartes?: number;
  idProducto?: number;
}
