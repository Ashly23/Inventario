/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Garantia, 'id'>, schemaOptions: { title: 'NewGarantia', exclude: [ 'id' ] })
 */
export interface NewGarantia {
  cuota?: string;
  descripcion?: string;
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  observacion?: string;
  porcentaje?: number;
}
