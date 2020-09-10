import { Pipe, PipeTransform } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Pipe( {
  name: 'existsInLocalStorage'
} )
export class ExistsInLocalStoragePipe implements PipeTransform {

  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  transform(value: number): boolean {
    return this.localStorageService.isInFavorites( value );
  }

}
