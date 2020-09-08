import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Movie, MovieImpl } from '../models/movie';
import { map, tap } from 'rxjs/operators';
import { ResultApi } from '../models/result-api';

@Injectable( {
  providedIn: 'root'
} )
export class MovieService {

  private baseUrl = `${environment.apiURL}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getLatest(): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'search/movie?sort_by=release_date.desc' )
      .pipe(
        map( r => {
          r.results = r.results.filter( m => m.poster_path ).map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
        tap(console.log),
      );
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>( this.baseUrl + 'movie/' + id );
  }

  findByTitle(title: string, page: number): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'search/movie?query=' + title + '&page=' + page )
      .pipe(
        map( r => {
          r.results = r.results.filter( m => m.poster_path ).map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
        tap(console.log),
      );
  }

}
