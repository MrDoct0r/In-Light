import { Genre } from './genre';
import { environment } from '../../../environments/environment';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  popularity: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  genres: Array<Genre>;
  homepage: string;
}

export class MovieImpl implements Movie {
  constructor(
    public id: number,
    public title: string,
    public overview: string,
    public popularity: string,
    public release_date: string,
    public vote_average: number,
    public poster_path: string,
    public genres: Array<Genre>,
    public homepage: string,
  ) {
  }

  get releaseDate(): Date {
    return new Date( this.release_date );
  }

  get fullPosterPath(): string {
    return environment.apiImageUrl + this.poster_path;
  }

  static fromPlainObject(movie: Movie): MovieImpl {
    return new MovieImpl(
      movie.id,
      movie.title,
      movie.overview,
      movie.popularity,
      movie.release_date,
      movie.vote_average,
      movie.poster_path,
      movie.genres,
      movie.homepage,
    );
  }
}
