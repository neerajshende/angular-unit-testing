import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/dymmy-data-classes/dummy-services/facade.service';

@Component({
  selector: 'app-mocking-dependencies-example',
  templateUrl: './mocking-dependencies-example.component.html',
  styleUrls: ['./mocking-dependencies-example.component.scss']
})
export class MockingDependenciesExampleComponent implements OnInit {

  constructor(private facadeService : FacadeService) { }

  ngOnInit() {
    this.facadeService.getDummyData();
  }

}
