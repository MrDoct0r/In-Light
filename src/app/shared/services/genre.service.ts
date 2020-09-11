import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable( {
  providedIn: 'root'
} )
export class GenreService {

  private baseUrl = `${environment.apiURL}`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
  }

  findAll = (): Observable<Array<Genre>> => this.http.get<{ genres: Array<Genre> }>( `${this.baseUrl}genre/movie/list` )
    .pipe(
      map<{ genres: Array<Genre> }, Array<Genre>>( r => r.genres ),
      tap( g => this.localStorageService.genres = g )
    )
}
