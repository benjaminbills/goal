import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css'],
})
export class GoalDetailComponent implements OnInit {
  goal!: any;

  constructor(private route: ActivatedRoute, private service: GoalService) {}

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id);
  }
}
