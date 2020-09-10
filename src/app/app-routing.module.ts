import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./feature/home/home.module').then( m => m.HomeModule ), },
      { path: 'movies', loadChildren: () => import('./feature/movies/movies.module').then( m => m.MoviesModule ), },
      { path: 'my-bookmarks', loadChildren: () => import('./feature/bookmarks/bookmarks.module').then( m => m.BookmarksModule ), },
    ]
  },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
