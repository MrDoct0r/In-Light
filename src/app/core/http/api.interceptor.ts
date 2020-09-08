import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newParams = new HttpParams( { fromString: request.params.toString() } );
    newParams = newParams.append( 'api_key', environment.apiKey );
    newParams = newParams.append( 'language', 'fr' );

    const requestClone = request.clone( {
      params: newParams
    } );
    return next.handle( requestClone );
  }
}
