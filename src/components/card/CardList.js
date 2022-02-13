import { getData } from "../../selectors/getData";
import { CardListItem } from "./CardListItem";


export const CardList = ({timeframe}) => {

    const data = getData();

    return (
        <>
            <h2>CardList</h2>
            {
                data.map( activity => (
                    <CardListItem 
                        key={ activity.title }
                        selectedTimeframe={ timeframe }
                        {...activity}
                    />
                ))
            }
        </>
    );
};
