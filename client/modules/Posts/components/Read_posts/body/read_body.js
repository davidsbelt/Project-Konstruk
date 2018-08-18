import React from 'react';
import './read_body.css';
import baccaIcon from '../../../../../assets/pictures/bacca icon 2.svg';
import '../../../../../assets/fonts/bacca-fonts.css';


class ReadBody extends React.Component {
    render(){	
        return (            
            <div className='read-body'>
                <div className='read-content'>
                    {this.props.data[0].content}
                </div>               
            </div>
        )
    }
}

export default ReadBody;