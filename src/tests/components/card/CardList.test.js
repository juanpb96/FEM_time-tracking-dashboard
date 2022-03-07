import { mount } from "enzyme";
import { CardList } from "../../../components/card/CardList";

describe('Tests in <CardList />', () => { 

    test('should render the component correctly', () => { 
        
        const timeframe = 'daily';
        const wrapper = mount(
            <CardList 
                timeframe={ timeframe }
            />
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.card').length ).toBe( 6 );

    });

})