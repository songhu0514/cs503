import { Injectable } from '@angular/core';
import {Problem} from "../models/problem.model";
import {PROBLEMS} from "../mock-problems";

@Injectable()
export class DataService {

  problems: Problem[] = PROBLEMS;

  constructor() { }

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
      return PROBLEMS.find((problem) => problem.id === id);
  }

  addProblem(problem: Problem): void {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
