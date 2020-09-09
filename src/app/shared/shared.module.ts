import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TilesComponent } from './components/tiles/tiles.component';


@NgModule( {
  declarations: [
    TilesComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TilesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
} )
export class SharedModule {
}
