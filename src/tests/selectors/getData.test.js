import data from '../../data/data.json';
import { getData } from '../../selectors/getData';

describe('Tests in getData()', () => { 

    test('should get the data correctly', () => {

        expect( getData() ).toEqual( data );

    }) 

});