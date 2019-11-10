import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonExamplesComponent } from './common-examples.component';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';

import { HttpHandler, HttpClient } from '@angular/common/http';

describe('CommonExamplesComponent', () => {
  let component: CommonExamplesComponent;
  let fixture: ComponentFixture<CommonExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CommonExamplesComponent ],
      providers: [DataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the result when getResult method is called', () => {
    component.firstNumber =12;
    component.secondNumber = 13;
    component.getResult('addition');
    expect(component.result).toBe(25);
  });

  it('should invoke the dataService method when button is clicked', () => {
    component.firstNumber =22;
    component.secondNumber = 28;
    let button = fixture.debugElement.nativeElement.querySelector('#addition');
    button.click();
    expect(component.result).toBe(50);
  });
});
