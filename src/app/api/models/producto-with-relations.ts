/* tslint:disable */
/* eslint-disable */
import { AreaWithRelations } from './area-with-relations';
import { CategoriasWithRelations } from './categorias-with-relations';
import { EmpleadoWithRelations } from './empleado-with-relations';
import { EncargadoWithRelations } from './encargado-with-relations';
import { EstadoProductoWithRelations } from './estado-producto-with-relations';
import { FabricanteWithRelations } from './fabricante-with-relations';
import { GarantiaWithRelations } from './garantia-with-relations';
import { PartesWithRelations } from './partes-with-relations';
import { SolicitudWithRelations } from './solicitud-with-relations';

/**
 * (tsType: ProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductoWithRelations {
  Areas?: AreaWithRelations;
  Categorias?: CategoriasWithRelations;
  Empleados?: EmpleadoWithRelations;
  EstadoProductos?: EstadoProductoWithRelations;
  Fabricantes?: FabricanteWithRelations;
  anioDepreciados: number;
  encargados?: Array<EncargadoWithRelations>;
  fechaCompra: string;
  garantias?: Array<GarantiaWithRelations>;
  id: number;
  idArea?: number;
  idCategorias?: number;
  idEmpleado?: number;
  idEstadoProducto?: number;
  idFabricante?: number;
  modelo?: string;
  partes?: Array<PartesWithRelations>;
  serie: string;
  solicitud?: Array<SolicitudWithRelations>;
  valor: number;
  valorDepreciado: number;
  vidaUtil: number;
}
