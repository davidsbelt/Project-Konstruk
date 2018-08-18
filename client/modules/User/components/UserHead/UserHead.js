
import React from 'react';
import './UserHead.css';
import '../../../../assets/fonts/bacca-fonts.css';

class UserHead extends React.Component {
    render(){	
        return (
            <div className='user-head-case'>
                <div className='user-lp'>
                    <img className='user-head-pic' src={this.props.data[1].user.profilePic}></img>
                    <div className='user-head-icons'>
                        <div className='user-head-pic-upload'>
                            <i className='ba-photo-camera-4'></i>
                        </div>
                        <i className='ba-twitter-1'></i>
                        <i className='ba-facebook-logo-button'></i>
                    </div>
                </div>
                <div className='user-rp'>
                    <i className='ba-add-2'></i>
                    <i className='ba-photo-camera'></i>
                </div>                
            </div> 
        )
    }
}

export default UserHead;