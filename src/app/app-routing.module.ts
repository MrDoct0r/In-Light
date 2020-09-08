import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'accueil', loadChildren: () => import('./feature/home/home.module').then( m => m.HomeModule ), },
      { path: 'films', loadChildren: () => import('./feature/movies/movies.module').then( m => m.MoviesModule ), },
    ]
  },

];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
