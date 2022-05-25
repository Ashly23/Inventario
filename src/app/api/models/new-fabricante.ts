/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Fabricante, 'id'>, schemaOptions: { title: 'NewFabricante', exclude: [ 'id' ] })
 */
export interface NewFabricante {
  correo?: string;
  estado?: boolean;
  nombre: string;
  sitioWeb?: string;
  telefono: string;
}
