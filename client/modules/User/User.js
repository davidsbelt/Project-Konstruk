/*Mounting point for all user components */
import React from 'react';
import './User.css';
import UserHead from './components/UserHead/UserHead.js';
import UserDetails from './components/UserDetails/UserDetails.js';
import UserActivity from './components/UserActivity/UserActivity.js';

class User extends React.Component {
    render(){	
        return (
            <div className='user-case'>
                <UserHead data={this.props.data}/>
                <UserDetails data={this.props.data}/>
                <UserActivity data={this.props.data}/>
            </div> 
        )
    }
}

export default User;