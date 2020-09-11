import { Pipe, PipeTransform } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Genre } from '../models/genre';

@Pipe( {
  name: 'getGenreById'
} )
export class GetGenreByIdPipe implements PipeTransform {

  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  transform(id: number): Genre {
    return this.localStorageService.findGenreById( id );
  }

}
