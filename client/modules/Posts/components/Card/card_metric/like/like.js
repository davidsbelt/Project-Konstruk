import React from 'react';
import './like.css';

/*mounting point for all the card components */
class Like extends React.Component {
    render(){	
        return (
            <div className='like-case'>
                <div className='like-icon'>
                    <i className='ba-twitter-logo-1'/>
                </div>
                <div className='like-met'>
                    25
                </div>
            </div>
        )
    }
}

export default Like;