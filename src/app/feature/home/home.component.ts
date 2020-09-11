import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultApi } from 'src/app/shared/models/result-api';
import { MovieImpl } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  public popularMovies$: Observable<ResultApi<MovieImpl>>;
  public latestMovies$: Observable<ResultApi<MovieImpl>>;
  public topRatedMovies$: Observable<ResultApi<MovieImpl>>;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.latestMovies$ = this.movieService.getLatest();
    this.popularMovies$ = this.movieService.getPopular();
    this.topRatedMovies$ = this.movieService.getTopRated();
  }
}

