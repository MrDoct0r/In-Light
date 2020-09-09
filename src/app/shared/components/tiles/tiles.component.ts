import { Component, Input, OnInit } from '@angular/core';
import { MovieImpl } from '../../models/movie';

@Component( {
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
} )
export class TilesComponent implements OnInit {
  @Input() movie: MovieImpl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
