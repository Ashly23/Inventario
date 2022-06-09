/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'id'>, 'idArea'>, schemaOptions: { title: 'NewEmpleadoInArea', exclude: [ 'id' ], optional: [ 'idArea' ] })
 */
export interface NewEmpleadoInArea {
  correo: string;
  estado: boolean;
  idArea?: number;
  nombre: string;
  telefono: string;
}
