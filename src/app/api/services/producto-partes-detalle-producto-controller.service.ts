/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoPartesDetalleProductoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productoPartesDetalleProductoControllerGetProducto
   */
  static readonly ProductoPartesDetalleProductoControllerGetProductoPath = '/producto-partes-detalles/{id}/producto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProducto()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoPartesDetalleProductoControllerService.ProductoPartesDetalleProductoControllerGetProductoPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProducto$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto(params: {
    id: number;
  }): Observable<Array<Producto>> {

    return this.getProducto$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

}
