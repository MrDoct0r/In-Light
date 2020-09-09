import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  public showAdultContent: string;
  public language: string;

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private localStorage: LocalStorageService,
    private translate: TranslateService) {}

  ngOnInit(): void {
    this.showAdultContent =  JSON.parse(this.localStorage.getAdultViewSettings());
    this.language = this.localStorage.getLanguageSettings();
  }

  onCancelClick(){
    this.dialogRef.close();
  }

  onSubmitClick(){
    this.translate.use(this.language);
    localStorage.setItem("language", this.language);
    localStorage.setItem("showAdultContent", this.showAdultContent);
    this.dialogRef.close();
    location.reload();
  }

}
