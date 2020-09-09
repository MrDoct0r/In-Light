import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  public showAdultContent: string;
  public language: string;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {

    this.showAdultContent = this.localStorageService.getAdultViewSettings();
    this.language = this.localStorageService.getLanguageSettings();

  }

}
