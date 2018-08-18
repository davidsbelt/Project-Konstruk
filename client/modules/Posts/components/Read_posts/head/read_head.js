import React from 'react';
import './read_head.css';
import baccaIcon from '../../../../../assets/pictures/bacca icon 2.svg';
import '../../../../../assets/fonts/bacca-fonts.css';


class ReadHead extends React.Component {
    render(){
        return (
            <div className='read-head-handle'>
                <img className='read-pic' src={this.props.data[1].featPic} ></img>
                <div className='read-head-case'>
                    <div className='read-topic'>
                        {this.props.data[0].topic}
                    </div>
                    <div className='read-intro'>
                        {this.props.data[0].intro}
                    </div>
                    <div className='read-user-case'>
                        <img className='read-user-pic' src={this.props.data[0].user.profilePic}></img>
                        <div className='read-metric-case'>                    
                            <div className='read-user-name'>
                                {this.props.data[0].user.firstname + ' '} 
                                {this.props.data[0].user.lastname}
                            </div>
                            <div className='read-user-mantra'>
                                {this.props.data[0].user.mantra}
                            </div>
                            <div className='read-metric'>
                                {this.props.data[0].date.monthWord + ', ' + this.props.data[0].date.day + ' ' + this.props.data[0].date.hour + ':' + this.props.data[0].date.min}
                            </div>
                        </div>
                    </div>     
                </div>               
            </div>
        )
    }
}

export default ReadHead;