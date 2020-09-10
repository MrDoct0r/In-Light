import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component( {
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
} )
export class BookmarksComponent implements OnInit {

  public myBookmarksId: number[];

  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {
    this.myBookmarksId = this.localStorageService.favorites;
  }

}
