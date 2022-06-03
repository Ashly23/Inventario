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

import { Fabricante } from '../models/fabricante';

@Injectable({
  providedIn: 'root',
})
export class PartesFabricanteControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation partesFabricanteControllerGetFabricante
   */
  static readonly PartesFabricanteControllerGetFabricantePath = '/partes/{id}/fabricante';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFabricante()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFabricante$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Fabricante>>> {

    const rb = new RequestBuilder(this.rootUrl, PartesFabricanteControllerService.PartesFabricanteControllerGetFabricantePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Fabricante>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFabricante$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFabricante(params: {
    id: number;
  }): Observable<Array<Fabricante>> {

    return this.getFabricante$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Fabricante>>) => r.body as Array<Fabricante>)
    );
  }

}
