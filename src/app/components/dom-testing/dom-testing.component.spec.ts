import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomTestingComponent } from './dom-testing.component';
import { By } from '@angular/platform-browser';

describe('DomTestingComponent', () => {
  let component: DomTestingComponent;
  let fixture: ComponentFixture<DomTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the DOM element initially as flag is false', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeNull();
  });

  it('should contain dom element when flag is set to true', () => {
    component.isVisible = true;
    fixture.detectChanges();   
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).not.toBeNull();
    expect(containerElement.nativeElement.textContent).toContain('This is DOM testing example!');
  });

  it('should have toggle button name based on flag', () => {
    const containerElement = fixture.debugElement.query(By.css('#customBtn'));
    component.isVisible = false;
    fixture.detectChanges();
    expect(containerElement.nativeElement.textContent.trim()).toBe('Show');
    component.isVisible = true;
    fixture.detectChanges();
    expect(containerElement.nativeElement.textContent.trim()).toBe('Hide');
  });

});
