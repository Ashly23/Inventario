/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Garantia, 'id'>, schemaOptions: { title: 'NewGarantia', exclude: [ 'id' ] })
 */
export interface NewGarantia {
  cuota?: string;
  estado: boolean;
  fecha: string;
  idProducto?: number;
  observacion?: string;
  porcentaje?: string;
}
