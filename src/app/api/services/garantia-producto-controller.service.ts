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

import { NewProductoInGarantia } from '../models/new-producto-in-garantia';
import { Producto } from '../models/producto';
import { ProductoPartial } from '../models/producto-partial';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class GarantiaProductoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation garantiaProductoControllerFind
   */
  static readonly GarantiaProductoControllerFindPath = '/garantias/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: number;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, GarantiaProductoControllerService.GarantiaProductoControllerFindPath, 'get');
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
        return r as StrictHttpResponse<Array<Producto>>;
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
  }): Observable<Array<Producto>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * Path part for operation garantiaProductoControllerCreate
   */
  static readonly GarantiaProductoControllerCreatePath = '/garantias/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: number;
    body?: NewProductoInGarantia
  }): Observable<StrictHttpResponse<Producto>> {

    const rb = new RequestBuilder(this.rootUrl, GarantiaProductoControllerService.GarantiaProductoControllerCreatePath, 'post');
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
        return r as StrictHttpResponse<Producto>;
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
    body?: NewProductoInGarantia
  }): Observable<Producto> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Producto>) => r.body as Producto)
    );
  }

  /**
   * Path part for operation garantiaProductoControllerDelete
   */
  static readonly GarantiaProductoControllerDeletePath = '/garantias/{id}/productos';

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

    const rb = new RequestBuilder(this.rootUrl, GarantiaProductoControllerService.GarantiaProductoControllerDeletePath, 'delete');
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
   * Path part for operation garantiaProductoControllerPatch
   */
  static readonly GarantiaProductoControllerPatchPath = '/garantias/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: number;
    where?: any;
    body?: ProductoPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, GarantiaProductoControllerService.GarantiaProductoControllerPatchPath, 'patch');
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
    body?: ProductoPartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
