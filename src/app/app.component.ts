import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )

export class AppComponent {
  title = 'tp-angular';
  appLangs = ['fr', 'en'];

  constructor(translate: TranslateService, localStorage: LocalStorageService) {

    translate.addLangs( this.appLangs );

    const languageToUse = localStorage.languageSettings ? localStorage.languageSettings : translate.getBrowserLang();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang( languageToUse );
  }

}



