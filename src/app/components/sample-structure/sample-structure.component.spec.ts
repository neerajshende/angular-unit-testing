import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleStructureComponent } from './sample-structure.component';

describe('SampleStructureComponent', () => {
  let component: SampleStructureComponent;
  let fixture: ComponentFixture<SampleStructureComponent>;

  beforeEach(async(() => {  /// Wrapping around async because async will not allow the next test to start until the async finishes all its tasks.
    TestBed.configureTestingModule({
      declarations: [SampleStructureComponent]
    })
      .compileComponents();
    /// The compileComponents object is called to compile your component’s resources like the template, styles etc. 
    /// You might not necessarily compile your component if you are using webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
