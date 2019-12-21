import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userData = [];

  constructor(private httpClient: HttpClient) { }

  rootUrl = 'https://jsonplaceholder.typicode.com/todos/';

  getData(): Observable<any> {
    return this.httpClient.get(this.rootUrl);
  }

  /// Example to show how to handle the observable request for unit test
  setUserData() {
    this.userData = [];
    this.getData().subscribe(data => {
      this.userData = data;
    })

  }

  getDataThroghPromise(): Promise<any> {
    return new Promise(resolve => resolve({ "dummyKey": "dummyValue" }));
  }


  performArithmenticOperations(number1, number2, operation) {
    let result: number;
    switch (operation) {
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
    return number1 + number2;
  }

  getSubstraction(number1, number2) {
    return number1 - number2;
  }

  getMultiplication(number1, number2) {
    return number1 * number2;
  }

  getDivision(number1, number2) {
    return number1 / number2;
  }
}
