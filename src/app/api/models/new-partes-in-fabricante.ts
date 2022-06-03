/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Partes, 'id'>, 'idFabricante'>, schemaOptions: { title: 'NewPartesInFabricante', exclude: [ 'id' ], optional: [ 'idFabricante' ] })
 */
export interface NewPartesInFabricante {
  capacidad?: string;
  estado?: boolean;
  idFabricante?: number;
  nombre: string;
  tecnologia?: string;
  tipoParte?: string;
}
