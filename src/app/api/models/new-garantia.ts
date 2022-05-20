/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Garantia, 'id'>, schemaOptions: { title: 'NewGarantia', exclude: [ 'id' ] })
 */
export interface NewGarantia {
  cuota?: string;
  descripcion?: string;
  estado: boolean;
  fecha: string;
  observacion?: string;
  porcentaje?: string;
}
