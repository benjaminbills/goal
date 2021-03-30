import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals!: Goal[];
  alertService: AlertService;
  quote!: Quote;
  constructor(
    goalService: GoalService,
    alertService: AlertService,
    private quoteService: QuoteRequestService,
    private router: Router
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.unshift(goal);
  }

  goToUrl(id: any) {
    this.router.navigate(['/goals', id]);
  }

  deleteGoal(index: number) {
    let toDelete = confirm(
      `Are you sure you want to delete ${this.goals[index].name}`
    );

    if (toDelete) {
      this.goals.splice(index, 1);
      this.alertService.alertMe('Goal has been deleted');
    }
  }
  ngOnInit(): void {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
  }
}
