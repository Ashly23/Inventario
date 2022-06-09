/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'id'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'id' ] })
 */
export interface NewEmpleado {
  correo: string;
  estado: boolean;
  idArea?: number;
  nombre: string;
  telefono: string;
}
