/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Partes, 'id'>, schemaOptions: { title: 'NewPartes', exclude: [ 'id' ] })
 */
export interface NewPartes {
  capacidad?: string;
  descripcion?: string;
  estado?: boolean;
  nombre: string;
  tecnologia?: string;
  tipoParte?: string;
  valor: string;
}
