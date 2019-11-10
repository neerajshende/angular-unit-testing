import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-testing',
  templateUrl: './input-output-testing.component.html',
  styleUrls: ['./input-output-testing.component.scss']
})
export class InputOutputTestingComponent implements OnInit {

  @Input()
  inputValue = '';

  @Output()
  msg: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitMessage() {
    this.msg.emit('This is emitted message');
   }

}
