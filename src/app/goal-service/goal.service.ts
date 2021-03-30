import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  getGoals() {
    return Goals;
  }
  getGoal(id: any) {
    let result;
    for (let goal of Goals) {
      if (goal.id == id) {
        result = goal;
      }
      return result;
    }
    return result;
  }
  constructor() {}
}
