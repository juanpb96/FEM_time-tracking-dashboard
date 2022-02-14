import { useMemo } from "react";

import { getData } from "../../selectors/getData";
import { CardListItem } from "./CardListItem";


export const CardList = ({timeframe}) => {

    const data = useMemo(() => getData(), []);

    return (
        <div className="card-list">
            {
                data.map( activity => (
                    <CardListItem 
                        key={ activity.title }
                        selectedTimeframe={ timeframe }
                        {...activity}
                    />
                ))
            }
        </div>
    );
};
