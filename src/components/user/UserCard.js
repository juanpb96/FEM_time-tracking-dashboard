import './user.scss';

export const UserCard = ({handleTimeframeChange}) => {
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
                <button type="button" onClick={ () => handleTimeframeChange('daily') }>Daily</button>
                <button type="button" onClick={ () => handleTimeframeChange('weekly') }>Weekly</button>
                <button type="button" onClick={ () => handleTimeframeChange('monthly') }>Monthly</button>
            </div>
        </div>
    )
}
