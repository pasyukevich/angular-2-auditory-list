import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { List } from '../list';
import { ListService } from './../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List[];
  currentPageList: List[];
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent;
  firstItemIndex = 0;
  lastItemIndex = this.pageSize;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.listService.listSubject.subscribe(list => {
      this.list = list;
      this.length = this.list.length;
    });
    this.listService.loadList();
  }

  listUpdate(): void {
    this.firstItemIndex = this.pageEvent.pageIndex * this.pageEvent.pageSize;
    this.lastItemIndex = this.firstItemIndex + this.pageEvent.pageSize;
  }
}
