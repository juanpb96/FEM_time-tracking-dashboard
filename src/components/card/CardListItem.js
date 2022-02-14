import './cardListItem.scss';

export const CardListItem = ({selectedTimeframe, title, timeframes}) => {
    
    const { current, previous } = timeframes[selectedTimeframe];
    const formattedTimeframe = selectedTimeframe.split('ly')[0];

    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__title"><span>{ title }</span></h3>
                <div className="card__timeframe">
                    <h2 className="card__current">{ current }hrs</h2>
                    <p className="card__previous">
                    { 
                        formattedTimeframe === 'dai' 
                            ? 'Yesterday' 
                            : 'Last ' + formattedTimeframe 
                    } - { previous }hrs</p>
                </div>
            </div>
        </div>
    );

};
