import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from 'src/app/shared/components/settings-dialog/settings-dialog.component';
import { Observable } from 'rxjs';
import { Genre } from '../../shared/models/genre';
import { GenreService } from '../../shared/services/genre.service';

@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
} )
export class LayoutComponent implements OnInit {
  mySearchControl = new FormControl();

  genres$: Observable<Array<Genre>>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private genreService: GenreService,
  ) {
  }

  ngOnInit(): void {
    this.genres$ = this.genreService.findAll();
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
