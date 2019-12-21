import { HighlightDirective } from './highlight.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { async } from 'q';

@Component({
  template: `<div class="custom-text" [appHighlight]="'yellow'">Hello World!</div>`
})
class TestHighlightComponent {
}

describe('HighlightDirective', () => {

  let component: TestHighlightComponent;
  let fixture: ComponentFixture<TestHighlightComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightComponent, HighlightDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHighlightComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('.custom-text'));
    fixture.detectChanges();
  })

  it('should highlight content when hovering over input', () => {
    inputElement.triggerEventHandler('mouseenter', 'orange');
    expect(inputElement.nativeElement.style.backgroundColor).toBe('yellow');

    inputElement.triggerEventHandler('mouseleave', '');
    expect(inputElement.nativeElement.style.backgroundColor).toBe('');
  });

});




