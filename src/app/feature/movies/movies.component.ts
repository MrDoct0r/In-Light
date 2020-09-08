import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { MovieService } from '../../shared/services/movie.service';
import { Observable } from 'rxjs';
import { MovieImpl } from '../../shared/models/movie';
import { ResultApi } from '../../shared/models/result-api';
import { PageEvent } from '@angular/material/paginator';

@Component( {
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
} )
export class MoviesComponent implements OnInit {
  public result$: Observable<ResultApi<MovieImpl>>;
  public searchString: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.result$ = this.route.queryParams.pipe(
      filter( p => !!p.search ),
      map( p => p.search ),
      tap( s => this.searchString = s ),
      switchMap( s => this.movieService.findByTitle( s, 1 ) ),
    );
  }

  changePage($event: PageEvent): void {
    this.result$ = this.movieService.findByTitle( this.searchString, $event.pageIndex + 1 );
  }
}
