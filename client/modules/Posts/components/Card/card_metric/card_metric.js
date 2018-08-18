import React from 'react';
import './card_metric.css';
import Like from './like/like.js'
import Share from './share/share.js'
import Enroll from './enroll/enroll.js'


class CardMetric extends React.Component {
    render(){	
        return (
            <div className='card-metric-case'>
                <div className='card-metric-left'>
                    <Like />
                    <Share />
                </div>
                <div className='card-metric-right'>
                    <Enroll />
                </div>
            </div>
        )
    }
}

export default CardMetric;