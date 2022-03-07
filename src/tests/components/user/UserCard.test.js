import { shallow } from "enzyme"
import { UserCard } from "../../../components/user/UserCard";

describe('Tests in <UserCard />', () => {

    const handleTimeframeChange = jest.fn();

    test('should render the component correctly', () => { 
        
        const timeframe = 'daily';
        const wrapper = shallow(
            <UserCard 
                timeframe={ timeframe }
                handleTimeframeChange={ handleTimeframeChange }
            />
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('button.user__active-timeframe').text().trim().toLowerCase() ).toBe( timeframe );

    })

    test('should change selected timeframe to Monthly', () => { 

        const timeframe = 'daily';
        const wrapper = shallow(
            <UserCard 
                timeframe={ timeframe }
                handleTimeframeChange={ handleTimeframeChange }
            />
        );

        const expectedTimeframe = 'monthly';
        
        wrapper.find('button').get(2).props.onClick();
        expect( handleTimeframeChange ).toHaveBeenCalledWith( expectedTimeframe );

    })

})