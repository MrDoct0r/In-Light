import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getAdultViewSettings(): string {
    return localStorage.getItem("showAdultContent");
  }
  getLanguageSettings(): string {
    return localStorage.getItem("language");
  }
}
