import { Component, OnInit } from '@angular/core';
import {Problem} from "../../models/problem.model";

const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: `Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: "easy"
  },
  {
    id: 2,
    name: "3Sum",
    desc: `Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.`,
    difficulty: "medium"
  },
  {
    id: 3,
    name: "4Sum",
    desc: `Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.`,
    difficulty: "medium"
  },
];

@Component({
  selector: 'app-problem-list',
  template: `
    <div class="container">
        <div class="list-group">
            <a class="list-group-item" *ngFor="let problem of problems">
                <span class="{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}">{{problem.difficulty}}</span>
                <strong class="title">{{problem.id}}.{{problem.name}}</strong>
            </a>
        </div>
    </div>
  `,
  styles: [`
  .difficulty {
    min-width: 65px;
    margin-right: 10px;
  }   
  
  .label.difficulty {
    padding-top: 0.6em;
    color: #fbfdfa;
    font-size: 12px;
  }
  
  .title {
    font-size: 1.2em;
  }
  
  .diff-easy {
    background-color: #42ebf4;
  }
  
  .diff-medium {
      background-color: #92cf5c;
  }
  
  .diff-hard {
      background-color: #dd0d1e;
  }
  
  .diff-super {
      background-color: #8d16e2;
  }
  `]
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor() { }

  ngOnInit() {
    this.problems = PROBLEMS;
  }

}
