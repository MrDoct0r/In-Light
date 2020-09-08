import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultApi } from 'src/app/shared/models/result-api';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';
import { TilesComponent } from '../movies/tiles/tiles.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public popularMovies$: Observable<ResultApi<Movie>>;
  public latestMovies$: Observable<ResultApi<Movie>>;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.latestMovies$ = this.movieService.getLatest();
    this.popularMovies$ = this.movieService.getPopular();
  }
}

