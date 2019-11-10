import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-testing',
  templateUrl: './dom-testing.component.html',
  styleUrls: ['./dom-testing.component.scss']
})
export class DomTestingComponent implements OnInit {

  isVisible = false;
  
  constructor() { }

  ngOnInit() {
  }

}
