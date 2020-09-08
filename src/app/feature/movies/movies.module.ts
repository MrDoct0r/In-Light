import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/shared.module';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';


@NgModule( {
  declarations: [CardsComponent, DetailsComponent, MoviesComponent],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ]
} )
export class MoviesModule {
}
