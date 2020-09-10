import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from 'src/app/shared/components/settings-dialog/settings-dialog.component';

@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
} )
export class LayoutComponent {
  mySearchControl = new FormControl();

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  openSettingsDialog(): void {
    this.dialog.open( SettingsDialogComponent, {
      width: '300px'
    } );
  }

  search(): void {
    this.router.navigate( ['/movies'], { queryParams: { search: this.mySearchControl.value } } );
  }


}
