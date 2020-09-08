import { Genre } from './genre';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  popularity: string;
  release_date: Date;
  vote_average: number;
  poster_path: string;
  genres: Array<Genre>;
  homepage: string;
}
