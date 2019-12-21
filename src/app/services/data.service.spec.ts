import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { async } from 'q';

describe('FacadeService', () => {
  let dataService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [DataService, HttpClient, HttpHandler]
  }));

  beforeEach(() => {
    dataService = TestBed.get(DataService);

  })

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should invoke http method and return data when getData method is called', () => {
    const httpService = TestBed.get(HttpClient);
    // returned value in order to avoid actual http call
    spyOn(httpService, "get").and.returnValue(of([{ dummyKey: "DummyValue" }]));
    const result = dataService.getData();
    expect(httpService.get).toHaveBeenCalled();
    expect(result).not.toBeNull();
  });

  it('Testing Promises', async () => {
    const result = await dataService.getDataThroghPromise();
    expect(result).toEqual({ "dummyKey": "dummyValue" });

  });

  it('should call respective operation method and return results, when performArithmenticOperations is called', () => {
    let result;
    spyOn(dataService, 'getAddtion').and.callThrough();
    spyOn(dataService, 'getSubstraction').and.callThrough();
    spyOn(dataService, 'getDivision').and.callThrough();
    spyOn(dataService, 'getMultiplication').and.callThrough();
    result = dataService.performArithmenticOperations(12, 6, 'addition');
    expect(dataService.getAddtion).toHaveBeenCalled();
    expect(result).toBe(18);
    result = dataService.performArithmenticOperations(12, 6, 'substraction');
    expect(dataService.getSubstraction).toHaveBeenCalled();
    expect(result).toBe(6);
    result = dataService.performArithmenticOperations(12, 6, 'multiplication');
    expect(dataService.getMultiplication).toHaveBeenCalled();
    expect(result).toBe(72);
    result = dataService.performArithmenticOperations(12, 6, 'division');
    expect(dataService.getDivision).toHaveBeenCalled();
    expect(result).toBe(2);
  })
});
