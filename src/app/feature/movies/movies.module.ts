import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';


@NgModule( {
  declarations: [MoviesComponent, DetailsComponent],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ]
} )
export class MoviesModule {
}
