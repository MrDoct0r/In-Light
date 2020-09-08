import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { MovieService } from '../../shared/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/models/movie';

@Component( {
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
} )
export class MoviesComponent implements OnInit {
  public movies$: Observable<Array<Movie>>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.movies$ = this.route.queryParams.pipe(
      filter( p => !!p.search ),
      map( p => p.search ),
      switchMap( s => this.movieService.findByTitle( s, 1 ) ),
      tap(console.log),
    );
  }

}
