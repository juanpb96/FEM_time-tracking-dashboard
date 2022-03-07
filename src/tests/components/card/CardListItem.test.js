import { shallow } from "enzyme";
import { CardListItem } from "../../../components/card/CardListItem";

const timeframes = {
    daily: {
        current: 5,
        previous: 7
    },
    weekly: {
        current: 32,
        previous: 36
    },
    monthly: {
        current: 103,
        previous: 128
    }
};

describe('test in <CardListItem />', () => { 

    test('should render the component correctly', () => { 

        const selectedTimeframe = 'weekly';
        const title = 'Work';

        const wrapper = shallow(
            <CardListItem 
                selectedTimeframe={ selectedTimeframe }
                title={ title }
                timeframes={ timeframes }
            />
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.card__title span').get(0).props.children ).toBe( title );

        const expectedPreviousMessage = `Last week - ${ timeframes[selectedTimeframe].previous }hrs`;

        expect( wrapper.find('.card__previous').text().trim() ).toBe( expectedPreviousMessage );

    });

    test('should display "Yesterday" if timeframe is "daily"', () => { 

        const selectedTimeframe = 'daily';
        const title = 'Work';

        const wrapper = shallow(
            <CardListItem 
                selectedTimeframe={ selectedTimeframe }
                title={ title }
                timeframes={ timeframes }
            />
        );

        const expectedPreviousMessage = `Yesterday - ${ timeframes[selectedTimeframe].previous }hrs`;

        expect( wrapper.find('.card__previous').text().trim() ).toBe( expectedPreviousMessage );

    })

});