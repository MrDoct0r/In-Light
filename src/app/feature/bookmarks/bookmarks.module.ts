import { NgModule } from '@angular/core';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule( {
  declarations: [BookmarksComponent],
  imports: [
    SharedModule,
    BookmarksRoutingModule
  ]
} )
export class BookmarksModule {
}
