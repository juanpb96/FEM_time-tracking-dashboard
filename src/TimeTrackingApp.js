import { useState } from "react";

import { UserCard } from "./components/user/UserCard";
import { CardList } from "./components/card/CardList";


export const TimeTrackingApp = () => {

    const [timeframe, setTimeframe] = useState('weekly');

    const handleTimeframeChange = (newTimeframe) => {
        setTimeframe(newTimeframe);
    }

    return (
        <>
            <h1>Time tracking dashboard</h1>
            <UserCard 
                handleTimeframeChange={ handleTimeframeChange } 
            />
            <CardList 
                timeframe={ timeframe }
            />
        </>
    )

};
