import { Component, Input } from '@angular/core';
import { MovieImpl } from '../../models/movie';
import { LocalStorageService } from '../../services/local-storage.service';
import { SnackBarService } from '../../services/snackbar.service';
import { TranslateService } from '@ngx-translate/core';

@Component( {
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
} )
export class TilesComponent {
  @Input() movie: MovieImpl;

  constructor(
    private localStorageService: LocalStorageService,
    private snackBar: SnackBarService
  ) {
  }

  toggleFavorites(id: number): void {
    if ( this.localStorageService.isInFavorites( id ) ) {
      this.localStorageService.removeFromFavorites( id );
      this.snackBar.displaySnackBar(
        'movie.removedFromFav',
        'general.close',
        3000,
        "right",
        "top"
      );
    } else {
      this.localStorageService.addToFavorites( id );
      this.snackBar.displaySnackBar(
        'movie.addedToFav',
        'general.close',
        3000,
        "right",
        "top"
      );
    }
  }
}
