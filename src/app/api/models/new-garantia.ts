/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Garantia, 'id'>, schemaOptions: { title: 'NewGarantia', exclude: [ 'id' ] })
 */
export interface NewGarantia {
  cuota?: string;
  estado: boolean;
  fechaFinal: string;
  fechaInicial: string;
  idProducto?: number;
  observacion?: string;
  porcentaje?: string;
}
