import React from 'react';
import './card_pic.css';
import baccaIcon from '../../../../../assets/pictures/bacca icon 2.svg';

class CardPic extends React.Component {
    render(){	
        return (
           <img className='card-pic' src={this.props.data.featPic}></img> 
        )
    }
}

export default CardPic;