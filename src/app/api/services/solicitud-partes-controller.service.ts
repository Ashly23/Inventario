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

import { Partes } from '../models/partes';

@Injectable({
  providedIn: 'root',
})
export class SolicitudPartesControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation solicitudPartesControllerGetPartes
   */
  static readonly SolicitudPartesControllerGetPartesPath = '/solicitud/{id}/partes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPartes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPartes$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Partes>>> {

    const rb = new RequestBuilder(this.rootUrl, SolicitudPartesControllerService.SolicitudPartesControllerGetPartesPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Partes>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPartes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPartes(params: {
    id: number;
  }): Observable<Array<Partes>> {

    return this.getPartes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Partes>>) => r.body as Array<Partes>)
    );
  }

}
