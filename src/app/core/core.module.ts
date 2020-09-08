import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ApiInterceptor } from './http/api.interceptor';


@NgModule( {
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [
    // Ajout de api_key
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
  ]
} )
export class CoreModule {
}
