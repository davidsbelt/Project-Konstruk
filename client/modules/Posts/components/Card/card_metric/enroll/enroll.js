import React from 'react';
import './enroll.css';

/*mounting point for all the card components */
class Enroll extends React.Component {
    render(){	
        return (
            <div className='enroll-case'>
                <div className='enroll-icon'>
                    enroll
                </div>
                <div className='enroll-met'>
                    2
                </div>
            </div>
        )
    }
}

export default Enroll;