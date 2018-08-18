import React from 'react';
import './card_foot.css';
import '../../../../../assets/fonts/bacca-fonts.css';

class CardFoot extends React.Component {
    render(){	
        return (
            <div className='card-foot-case'>
                <div className='card-foot-icons'>
                   <i className="ba-share"></i> 
                </div>
                <div className='card-foot-metrics'></div>                
            </div>
        )
    }
}

export default CardFoot;