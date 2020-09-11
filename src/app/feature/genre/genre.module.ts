import { NgModule } from '@angular/core';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule( {
  declarations: [GenreComponent],
  imports: [
    SharedModule,
    GenreRoutingModule
  ]
} )
export class GenreModule {
}
