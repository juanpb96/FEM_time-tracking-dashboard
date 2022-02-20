import './user.scss';

export const UserCard = ({timeframe, handleTimeframeChange}) => {
    return (
        <div className="user">
            <div className="user__content">
                <img 
                    className="user__picture" 
                    src="/assets/image-jeremy.png" 
                    alt="Jeremy's profile"
                />
                <div className="user__info">
                    <h3 className='user__title'>Report for</h3>
                    <h2 className="user__name"><span>Jeremy</span> <span>Robson</span></h2>
                </div>
            </div>
            <div className="user__timeframes">
                <button 
                    type="button" 
                    onClick={ () => handleTimeframeChange('daily') }
                    className={ timeframe === 'daily' ? 'user__active-timeframe' : undefined }
                >Daily</button>
                <button 
                    type="button" 
                    onClick={ () => handleTimeframeChange('weekly') }
                    className={ timeframe === 'weekly' ? 'user__active-timeframe' : undefined }
                >Weekly</button>
                <button 
                    type="button" 
                    onClick={ () => handleTimeframeChange('monthly') }
                    className={ timeframe === 'monthly' ? 'user__active-timeframe' : undefined }
                >Monthly</button>
            </div>
        </div>
    )
}
