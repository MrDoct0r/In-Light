import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable( {
  providedIn: 'root'
} )
export class LocalStorageService {

  constructor() {
  }

  get favorites(): number[] {
    return JSON.parse( localStorage.getItem( 'favorites' ) ) || [];
  }

  get adultViewSettings(): string {
    return localStorage.getItem( 'showAdultContent' );
  }

  get languageSettings(): string {
    return localStorage.getItem( 'language' );
  }

  get genres(): Genre[] {
    return JSON.parse( localStorage.getItem( 'genres' ) );
  }

  set genres(genres: Genre[]) {
    localStorage.setItem( 'genres', JSON.stringify( genres ) );
  }

  isInFavorites(id: number): boolean {
    return this.favorites.includes( id );
  }

  addToFavorites(id: number): void {
    const fav: number[] = this.favorites;
    fav.push( id );
    localStorage.setItem( 'favorites', JSON.stringify( fav ) );
  }

  removeFromFavorites(id: number): void {
    const fav: number[] = this.favorites;
    const index = fav.indexOf( id );
    if ( index !== -1 ) {
      fav.splice( index, 1 );
    }
    localStorage.setItem( 'favorites', JSON.stringify( fav ) );
  }

  findGenreById = (id: number): Genre => this.genres.find( value => value.id === id );
}
