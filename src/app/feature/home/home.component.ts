import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultApi } from 'src/app/shared/models/result-api';
import { Movie } from 'src/app/shared/models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mostPopularMovies$: Observable<ResultApi<Movie>>;
  public latestMovies$: Observable<ResultApi<Movie>>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.latestMovies$ = this.movieService.getLatest( );
  }

}
