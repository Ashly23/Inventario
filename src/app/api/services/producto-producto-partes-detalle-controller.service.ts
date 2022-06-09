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

import { NewProductoPartesDetalleInProducto } from '../models/new-producto-partes-detalle-in-producto';
import { ProductoPartesDetalle } from '../models/producto-partes-detalle';
import { ProductoPartesDetallePartial } from '../models/producto-partes-detalle-partial';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class ProductoProductoPartesDetalleControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productoProductoPartesDetalleControllerFind
   */
  static readonly ProductoProductoPartesDetalleControllerFindPath = '/productos/{id}/producto-partes-detalles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: number;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<ProductoPartesDetalle>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoProductoPartesDetalleControllerService.ProductoProductoPartesDetalleControllerFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductoPartesDetalle>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: number;
    filter?: any;
  }): Observable<Array<ProductoPartesDetalle>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductoPartesDetalle>>) => r.body as Array<ProductoPartesDetalle>)
    );
  }

  /**
   * Path part for operation productoProductoPartesDetalleControllerCreate
   */
  static readonly ProductoProductoPartesDetalleControllerCreatePath = '/productos/{id}/producto-partes-detalles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: number;
    body?: NewProductoPartesDetalleInProducto
  }): Observable<StrictHttpResponse<ProductoPartesDetalle>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoProductoPartesDetalleControllerService.ProductoProductoPartesDetalleControllerCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductoPartesDetalle>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: number;
    body?: NewProductoPartesDetalleInProducto
  }): Observable<ProductoPartesDetalle> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<ProductoPartesDetalle>) => r.body as ProductoPartesDetalle)
    );
  }

  /**
   * Path part for operation productoProductoPartesDetalleControllerDelete
   */
  static readonly ProductoProductoPartesDetalleControllerDeletePath = '/productos/{id}/producto-partes-detalles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
    where?: any;
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoProductoPartesDetalleControllerService.ProductoProductoPartesDetalleControllerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
    where?: any;
  }): Observable<LoopbackCount> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation productoProductoPartesDetalleControllerPatch
   */
  static readonly ProductoProductoPartesDetalleControllerPatchPath = '/productos/{id}/producto-partes-detalles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: number;
    where?: any;
    body?: ProductoPartesDetallePartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoProductoPartesDetalleControllerService.ProductoProductoPartesDetalleControllerPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: number;
    where?: any;
    body?: ProductoPartesDetallePartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
