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

import { Area } from '../models/area';

@Injectable({
  providedIn: 'root',
})
export class ProductoAreaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productoAreaControllerGetArea
   */
  static readonly ProductoAreaControllerGetAreaPath = '/productos/{id}/area';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArea()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArea$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Area>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoAreaControllerService.ProductoAreaControllerGetAreaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Area>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getArea$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArea(params: {
    id: number;
  }): Observable<Array<Area>> {

    return this.getArea$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Area>>) => r.body as Array<Area>)
    );
  }

}
