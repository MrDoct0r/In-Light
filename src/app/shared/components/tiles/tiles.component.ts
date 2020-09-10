import { Component, Input } from '@angular/core';
import { MovieImpl } from '../../models/movie';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component( {
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
} )
export class TilesComponent {
  @Input() movie: MovieImpl;

  constructor(
    private localStorageService: LocalStorageService,
    private snackBar: MatSnackBar,
  ) {
  }

  toggleFavorites(id: number): void {
    if ( this.localStorageService.isInFavorites( id ) ) {
      this.localStorageService.removeFromFavorites( id );
      this.snackBar.open( 'Ce film a été retiré des favoris', 'Succès', {
        duration: 3000
      } );
    } else {
      this.localStorageService.addToFavorites( id );
      this.snackBar.open( 'Ce film a été ajouté aux favoris', 'Succès', {
        duration: 3000
      } );
    }
  }
}
