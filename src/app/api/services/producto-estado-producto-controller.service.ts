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

import { EstadoProducto } from '../models/estado-producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoEstadoProductoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productoEstadoProductoControllerGetEstadoProducto
   */
  static readonly ProductoEstadoProductoControllerGetEstadoProductoPath = '/productos/{id}/estado-producto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEstadoProducto()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEstadoProducto$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<EstadoProducto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoEstadoProductoControllerService.ProductoEstadoProductoControllerGetEstadoProductoPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EstadoProducto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEstadoProducto$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEstadoProducto(params: {
    id: number;
  }): Observable<Array<EstadoProducto>> {

    return this.getEstadoProducto$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EstadoProducto>>) => r.body as Array<EstadoProducto>)
    );
  }

}
