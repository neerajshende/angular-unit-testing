import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTestingComponent } from './input-output-testing.component';
import { By } from '@angular/platform-browser';

describe('InputOutputTestingComponent', () => {
  let component: InputOutputTestingComponent;
  let fixture: ComponentFixture<InputOutputTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    const element = fixture.debugElement.query(By.css('.custom-input'));
    // there shouldn't be any value initially
    expect(element.nativeElement.textContent.trim()).toBe('');

    // setting @Input value and verifying again
    component.inputValue = 'Test Value';
    fixture.detectChanges();
    expect(element.nativeElement.textContent.trim()).toBe('Test Value');
  });

  it('should emit the event when button is clicked', () => {
    let emittedValue;
    component.msg.subscribe(d => {
      emittedValue = d;
    });
    spyOn(component.msg, 'emit').and.callThrough();

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.msg.emit).toHaveBeenCalledWith('This is emitted message');
    expect(emittedValue).toBe('This is emitted message');

  });

});
