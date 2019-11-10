import { Injectable } from '@angular/core';
import { SignupService } from '../dymmy-data-classes/dummy-services/signup.service';
import { AccountService } from '../dymmy-data-classes/dummy-services/account.service';
import { DashboardService } from '../dymmy-data-classes/dummy-services/dashboard.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = 'https://jsonplaceholder.typicode.com/todos/';

  getData() {
    return this.httpClient.get(this.rootUrl);
  }

  performArithmenticOperations(number1, number2, operation) {
    let result: number;
    switch(operation) {
      case 'addition':
        result = this.getAddtion(number1, number2);
        break;
      case 'substraction':
          result = this.getSubstraction(number1, number2);
          break; 
      case 'multiplication':
          result = this.getMultiplication(number1, number2);
          break;
      case 'division':
          result = this.getDivision(number1, number2);
          break;
      default:
          result = this.getAddtion(number1, number2);
          break;
    }
    return result;
  }

  getAddtion(number1, number2) {
    return number1+number2;
  }

  getSubstraction(number1, number2) {
    return number1-number2;
  }

  getMultiplication(number1, number2) {
    return number1*number2;
  }

  getDivision(number1, number2) {
    return  number1/number2;
  }
}
