import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { tap } from 'rxjs/operators';
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

  findByTitle(title: string, page: number): Observable<ResultApi<Movie>> {
    return this.http.get<ResultApi<Movie>>( this.baseUrl + 'search/movie?query=' + title + '&page=' + page )
      .pipe(
        tap( r => r.results.filter(m => m.poster_path).forEach( v => v.poster_path = 'https://image.tmdb.org/t/p/w500/' + v.poster_path ) )
      );
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>( this.baseUrl + 'movie/' + id );
  }
}
