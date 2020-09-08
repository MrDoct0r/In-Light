import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class MovieService {

  private baseUrl = `${environment.omdbApi}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  findByTitle(title: string, page: number): Observable<Array<Movie>> {
    return this.http
      .get<{ Response: string, Search?: Array<Movie>, totalResults: string }>( this.baseUrl + 's=' + title + '&type=movie&p=' + page )
      .pipe(
        map( r => {
          if ( r.Response === 'True' ) {
            return r.Search;
          } else {
            return [];
          }
        } ),
        map( r => r.filter( v => v.Poster !== 'N/A' ) )
      );
  }

  findById(id: string): Observable<Movie> {
    return this.http.get<Movie>( this.baseUrl + 'i=' + id + '&type=movie' );
  }
}
