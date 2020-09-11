import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from '../../services/snackbar.service';

@Component( {
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
} )
export class SettingsDialogComponent implements OnInit {

  public showAdultContent: string;
  public language: string;

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.showAdultContent = JSON.parse( this.localStorage.adultViewSettings );
    this.language = this.localStorage.languageSettings;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    this.snackBar.displaySnackBar('Application des nouveaux paramètres', 'Fermer', 3000, "right", "top");
    this.translate.use( this.language );
    localStorage.setItem( 'language', this.language );
    localStorage.setItem( 'showAdultContent', this.showAdultContent );
    this.dialogRef.close();
    location.reload();
  }

}
