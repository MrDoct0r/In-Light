import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MovieImpl } from '../models/movie';
import { map } from 'rxjs/operators';
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
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'discover/movie?sort_by=release_date.desc' )
      .pipe(
        map( r => {
          r.results = r.results.map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
      );
  }

  getPopular(): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'discover/movie?sort_by=popularity.desc' )
      .pipe(
        map( r => {
          r.results = r.results.map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
      );
  }

  getTopRated(): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'discover/movie?sort_by=vote_average.desc&sort_by=vote_count.desc' )
      .pipe(
        map( r => {
          r.results = r.results.map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
      );
  }

  getById(id: number): Observable<MovieImpl> {
    return this.http.get<MovieImpl>( this.baseUrl + 'movie/' + id )
      .pipe(
        map( m => MovieImpl.fromPlainObject( m ) ),
      );
  }

  findByTitle(title: string, page: number): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'search/movie?query=' + title + '&page=' + page )
      .pipe(
        map( r => {
          r.results = r.results.map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
      );
  }

  discoverByGenreId(id: number, page: number): Observable<ResultApi<MovieImpl>> {
    return this.http.get<ResultApi<MovieImpl>>( this.baseUrl + 'discover/movie?with_genres=' + id + '&page=' + page )
      .pipe(
        map( r => {
          r.results = r.results.map( m => MovieImpl.fromPlainObject( m ) );
          return r;
        } ),
      );
  }
}
