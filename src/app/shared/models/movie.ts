import { Genre } from './genre';
import { environment } from '../../../environments/environment';

export interface Movie {
  id: number;
  title: string;
  tagline?: string;
  overview: string;
  popularity: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  genres: Array<Genre>;
  genre_ids?: number[];
  homepage: string;
}

export class MovieImpl implements Movie {
  constructor(
    public id: number,
    public title: string,
    public tagline: string,
    public overview: string,
    public popularity: string,
    public release_date: string,
    public vote_average: number,
    public poster_path: string,
    public genres: Array<Genre>,
    public genre_ids: number[],
    public homepage: string,
  ) {
  }

  get releaseDate(): Date {
    return this.release_date ? new Date( this.release_date ) : null;
  }

  get fullPosterPath(): string {
    return this.poster_path ? environment.apiImageUrl + this.poster_path : '/assets/img/no-image.png';
  }

  static fromPlainObject(movie: Movie): MovieImpl {
    return new MovieImpl(
      movie.id,
      movie.title,
      movie.tagline,
      movie.overview,
      movie.popularity,
      movie.release_date,
      movie.vote_average,
      movie.poster_path,
      movie.genres,
      movie.genre_ids,
      movie.homepage,
    );
  }
}
