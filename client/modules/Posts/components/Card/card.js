import React from 'react';
import './card.css';
import CardMetric from './card_metric/card_metric.js';
import CardHead from './card_head/card_head.js';
import CardPic from './card_pic/card_pic.js';


/*mounting point for all the card components */
class Card extends React.Component {
    render(){	
        return (
            <div className='card-case'>
                <div className='card-handle'>
                    <CardHead data={this.props.data} />
                    <CardPic data={this.props.data} />
                    
                </div>
                <div>
                    <CardMetric />
                </div>
            </div>
        )
    }
}

export default Card;