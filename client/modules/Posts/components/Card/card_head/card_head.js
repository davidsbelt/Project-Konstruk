import React from 'react';
import './card_head.css';
import baccaIcon from '../../../../../assets/pictures/bacca icon 2.svg';



class CardHead extends React.Component {
    render(){	
        return (
            <div className='card-head'>
                <div className='card-topic-case'>
                    <div className='card-topic'>
                        {this.props.data.topic}
                    </div>
                    <img className='card-user' src={this.props.data.user.profilePic}></img>
                </div>
                <div className='card-user-name'>
                    {this.props.data.user.firstname + ' ' + this.props.data.user.lastname }
                </div>
                <div className='card-intro-case'>
                    <div className='card-intro'>
                        {this.props.data.intro}
                    </div>
                    <div className='card-head-metric'>
                        <span>
                            {this.props.data.date.monthWord + ', ' + this.props.data.date.day + ' ' + this.props.data.date.hour + ':' + this.props.data.date.min}
                        </span>
                        <span>
                            <i className="ba-comment-bubble"></i>                            
                            <i className="ba-upload-arrow"></i>
                        </span>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CardHead;