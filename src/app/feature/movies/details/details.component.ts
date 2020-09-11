import { Component, OnInit, Input } from '@angular/core';
import { MovieImpl, Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Observable } from 'rxjs';
import { ResultApi } from 'src/app/shared/models/result-api';
import { Route, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public movie$: Observable<MovieImpl>;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private snackBar: SnackBarService
  ) {}

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map((p) => p.id),
      switchMap((id) => this.movieService.getById(id))
    );
  }

  toggleFavorites(id: number): void {
    if (this.localStorageService.isInFavorites(id)) {
      this.localStorageService.removeFromFavorites(id);
      this.snackBar.displaySnackBar(
        'movie.removedFromFav',
        'general.close',
        3000,
        'right',
        'top'
      );
    } else {
      this.localStorageService.addToFavorites(id);
      this.snackBar.displaySnackBar(
        'movie.addedToFav',
        'general.close',
        3000,
        'right',
        'top'
      );
    }
  }
}
