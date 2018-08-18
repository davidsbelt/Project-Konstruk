import React from 'react';
import './UserMenu.css';

class UserMenu extends React.Component {
    render(){	
        return (
            <div className='user-dropdown'>
                <img className='userIcon' src='http://res.cloudinary.com/bacca/image/upload/v1488287151/j04gtd6cygnbemcrquhv.jpg'></img>
                <div className='navMenuContent'>
                    <ul >
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Humour</a></li>
                        <li><a href="#">Gaming</a></li>
                        <li><a href="#">Music</a></li>                                
                    </ul>
                </div>
            </div>
            )
        }
}

export default UserMenu;