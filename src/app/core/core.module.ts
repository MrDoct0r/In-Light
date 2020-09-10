import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ApiInterceptor } from './http/api.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader( http );
}

@NgModule( {
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    } ),
  ],
  providers: [
    // Ajout de api_key
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ]
} )
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if ( parentModule ) {
      throw new Error( 'Core déjà chargé' );
    }
  }

}
