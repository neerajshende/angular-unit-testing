import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockingDependenciesExampleComponent } from './mocking-dependencies-example.component';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { FacadeService } from 'src/app/dymmy-data-classes/dummy-services/facade.service';


// Here creating mocked class to avoid providing indirect dependencies
@Injectable()
class MockedClass {
  getDummyData() { return "Mocked Data" };
}

describe('MockingDependenciesExampleComponent', () => {
  let component: MockingDependenciesExampleComponent;
  let fixture: ComponentFixture<MockingDependenciesExampleComponent>;
  let facadeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockingDependenciesExampleComponent],
      // Used mocked class instead of facade service else will have to list the providers of facade service as well.
      providers: [{ provide: FacadeService, useClass: MockedClass }],

      // NO_Error_Schema will neglate all the component dependencies else you will have to provide all component dependencies used
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockingDependenciesExampleComponent);
    component = fixture.componentInstance;
    facadeService = TestBed.get(FacadeService);
    spyOn(facadeService, "getDummyData").and.returnValue("");
    fixture.detectChanges();
  });

  it('should create and invoke getDummyData method', () => {
    expect(component).toBeTruthy();
    expect(facadeService.getDummyData).toHaveBeenCalled();
  });
});
