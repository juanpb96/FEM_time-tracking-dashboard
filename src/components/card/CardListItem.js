

export const CardListItem = ({selectedTimeframe, title, timeframes}) => {
    
    const { current, previous } = timeframes[selectedTimeframe];
    const formattedTimeframe = selectedTimeframe.split('ly')[0];

    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__title">{ title }</h3>
                <h2 className="card__current">{ current }hrs</h2>
                <p className="card__previous">Last { formattedTimeframe === 'dai' ? 'day' : formattedTimeframe } - { previous }hrs</p>
            </div>
        </div>
    );

};
