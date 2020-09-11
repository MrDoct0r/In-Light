import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private message: string;
  private action: string;

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  displaySnackBar(
    messageKey: string,
    actionKey: string,
    displayTime: number,
    horizontalPosition: MatSnackBarHorizontalPosition,
    verticalPosition: MatSnackBarVerticalPosition
  ) {
    this.translate.get(messageKey).subscribe((value) => (this.message = value));
    this.translate.get(actionKey).subscribe((value) => (this.action = value));

    return this.snackBar.open(this.message, this.action, {
      duration: displayTime,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }
}
