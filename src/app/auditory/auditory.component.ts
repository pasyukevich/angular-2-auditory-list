import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListService } from './../list.service';
import { List } from '../list';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.component.html',
  styleUrls: ['./auditory.component.css']
})
export class AuditoryComponent implements OnInit {
  auditory: List;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAuditory();
  }

  getAuditory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listService.getAuditoryById(id).then(item => {
      item ? (this.auditory = item) : this.router.navigate(['/404']);
    });
  }
}
