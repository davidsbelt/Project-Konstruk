
import React from 'react';
import './UserActivity.css';
import '../../../../assets/fonts/bacca-fonts.css';

class UserActivity extends React.Component {
        render(){	       
            const data = this.props.data;
            const userActivity = data.map((d) =>               
                <div className='u-a-body'>
                    <div className='u-a-b-left'>
                        <div className='u-a-topic'>
                            {d.topic}
                        </div>
                        <div className='u-a-metric'>
                             {d.date.monthWord + ', ' + d.date.day + ' ' + d.date.hour + ':' + d.date.min}
                        </div>
                    </div>
                    <img className='u-a-image' src={d.user.profilePic}></img>
                </div>  
            )

             return (  
                <div className='user-activity-case'>
                    <div className='u-a-head'>
                        Your recent posts
                    </div>
                    <div className='u-a-stream-case'>
                        {userActivity}
                    </div>
                    
                </div>                     
        )
    }
}

export default UserActivity;