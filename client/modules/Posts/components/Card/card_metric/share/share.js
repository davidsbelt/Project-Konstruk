import React from 'react';
import './share.css';

/*mounting point for all the card components */
class Share extends React.Component {
    render(){	
        return (
            <div className='share-case'>
                <div className='share-icon'>
                    <i className='ba-right-arrow'/>
                </div>
                <div className='share-met'>
                    2
                </div>
            </div>
        )
    }
}

export default Share;