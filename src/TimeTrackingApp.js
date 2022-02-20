import { useState } from "react";

import { UserCard } from "./components/user/UserCard";
import { CardList } from "./components/card/CardList";
import './styles.scss';


export const TimeTrackingApp = () => {

    const [timeframe, setTimeframe] = useState('weekly');

    const handleTimeframeChange = (newTimeframe) => {
        setTimeframe(newTimeframe);
    }

    return (
        <main>
            <h1 className="sr-only">Time tracking dashboard</h1>
            <UserCard 
                timeframe={ timeframe }
                handleTimeframeChange={ handleTimeframeChange } 
            />
            <CardList 
                timeframe={ timeframe }
            />
        </main>
    )

};
