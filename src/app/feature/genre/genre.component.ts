import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieImpl } from '../../shared/models/movie';
import { MovieService } from '../../shared/services/movie.service';
import { ResultApi } from '../../shared/models/result-api';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Genre } from '../../shared/models/genre';
import { PageEvent } from '@angular/material/paginator';

@Component( {
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
} )
export class GenreComponent implements OnInit {

  result$: Observable<ResultApi<MovieImpl>>;
  genre: Genre;
  // MatPaginator Output
  pageEvent: PageEvent;
  pageIndex: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {
    this.result$ = this.route.params.pipe(
      map( p => +p.id ),
      tap( id => this.genre = this.localStorageService.findGenreById( id ) ),
      switchMap( id => this.movieService.discoverByGenreId( id, 1 ) )
    );
  }

  changePage($event: PageEvent): PageEvent {
    this.result$ = this.movieService.discoverByGenreId( this.genre.id, $event.pageIndex + 1 );
    this.pageIndex = $event.pageIndex;
    return $event;
  }

}
