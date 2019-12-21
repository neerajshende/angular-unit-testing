import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-common-examples',
  templateUrl: './common-examples.component.html',
  styleUrls: ['./common-examples.component.scss']
})
export class CommonExamplesComponent implements OnInit {

  result: number;
  firstNumber: number;
  secondNumber: number;
  userData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  getResult(operation) {
    this.result = this.dataService.performArithmenticOperations(this.firstNumber, this.secondNumber, operation);
  }
}
