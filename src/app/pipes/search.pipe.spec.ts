import { SearchPipe } from './search.pipe';

const dummyData = [ 'Finn the human',
      'Neeraj',
      'Akash',
      'Achin',
      'Rahul',
      'Kashif',
      'Sandeep'
]
describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter the result based on the searchText', () => {
    const pipe = new SearchPipe();
    const result = pipe.transform(dummyData, "neer");
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual("Neeraj");
  });

});
