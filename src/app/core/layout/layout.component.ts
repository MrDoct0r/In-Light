import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
} )
export class LayoutComponent {
  mySearchControl = new FormControl();

  constructor(
    private router: Router,
  ) {
  }

  search(): void {
    this.router.navigate( ['/films'], { queryParams: { search: this.mySearchControl.value } } );
  }

}
