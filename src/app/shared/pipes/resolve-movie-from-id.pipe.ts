import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieImpl } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Pipe( {
  name: 'resolveMovieFromId'
} )
export class ResolveMovieFromIdPipe implements PipeTransform {

  constructor(
    private movieService: MovieService,
  ) {
  }

  transform(id: number): Observable<MovieImpl> {
    return this.movieService.getById( id );
  }

}
