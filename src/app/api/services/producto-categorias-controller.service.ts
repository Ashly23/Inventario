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

import { Categorias } from '../models/categorias';

@Injectable({
  providedIn: 'root',
})
export class ProductoCategoriasControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productoCategoriasControllerGetCategorias
   */
  static readonly ProductoCategoriasControllerGetCategoriasPath = '/productos/{id}/categorias';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategorias()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorias$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Categorias>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoCategoriasControllerService.ProductoCategoriasControllerGetCategoriasPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Categorias>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCategorias$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorias(params: {
    id: number;
  }): Observable<Array<Categorias>> {

    return this.getCategorias$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Categorias>>) => r.body as Array<Categorias>)
    );
  }

}
