import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

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
      declarations: [CommonExamplesComponent],
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
    component.firstNumber = 12;
    component.secondNumber = 13;
    component.getResult('addition');
    expect(component.result).toBe(25);
  });

  it('should set the result of arithmetic operation when button is clicked', () => {
    component.firstNumber = 22;
    component.secondNumber = 29;
    const button = fixture.nativeElement.querySelector("#addition");
    button.click();
    expect(component.result).toBe(51);
  });
});
