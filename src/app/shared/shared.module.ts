import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TilesComponent } from './components/tiles/tiles.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule( {
  declarations: [
    TilesComponent,
    SettingsDialogComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TilesComponent,
    TranslateModule,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
  ]
} )
export class SharedModule {
}
