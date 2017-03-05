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
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor() { }

  ngOnInit() {
    this.problems = PROBLEMS;
  }

}
