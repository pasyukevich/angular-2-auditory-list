import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from './list';

@Injectable()
export class ListService {
  listSubject: Subject<List[]> = new Subject<List[]>();
  private list: List[] = null;
  private listUrl = 'https://students.bsuir.by/api/v1/auditory';

  constructor(private http: HttpClient) {}

  private getObservableData(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl);
  }

  private getItemIndex(id) {
    for (const item in this.list) {
      if (this.list[item].id === +id) {
        return item;
      }
    }
  }

  loadList(): void {
    this.getObservableData()
      .toPromise()
      .then(list => {
        this.list = list;
        this.listSubject.next(this.list);
      });
  }

  getAuditoryById(id): Promise<List> {
    let index, promise;

    promise = new Promise(resolve => {
      if (!this.list) {
        this.getObservableData()
          .toPromise()
          .then(list => {
            this.list = list;
            index = this.getItemIndex(id);
            resolve(this.list[index]);
          });
      } else {
        index = this.getItemIndex(id);
        resolve(this.list[index]);
      }
    });
    return promise;
  }
}
