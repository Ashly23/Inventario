/* tslint:disable */
/* eslint-disable */
import { AreaWithRelations } from './area-with-relations';
import { CategoriasWithRelations } from './categorias-with-relations';
import { EncargadoWithRelations } from './encargado-with-relations';
import { EstadoProductoWithRelations } from './estado-producto-with-relations';
import { FabricanteWithRelations } from './fabricante-with-relations';
import { GarantiaWithRelations } from './garantia-with-relations';
import { PartesWithRelations } from './partes-with-relations';

/**
 * (tsType: ProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductoWithRelations {
  Areas?: AreaWithRelations;
  Categorias?: CategoriasWithRelations;
  EstadoProductos?: EstadoProductoWithRelations;
  Fabricantes?: FabricanteWithRelations;
  Garantias?: GarantiaWithRelations;
  Parte?: PartesWithRelations;
  anioDepreciados: number;
  encargados?: EncargadoWithRelations;
  etiquetaServ?: string;
  id: number;
  idArea?: number;
  idCategorias?: number;
  idEstadoProducto?: number;
  idFabricante?: number;
  idGarantia?: number;
  idPartes?: number;
  modelo?: string;
  nombre: string;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
