import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './Header.css';
import baccaIcon from '../../../../assets/pictures/bacca icon 2.svg';
import baccaWriting from '../../../../assets/pictures/bacca writing.svg';
import '../../../../assets/fonts/bacca-fonts.css';
import UserMenu from '../UserMenu/UserMenu.js';


/**
 * using redux, fetch data for the header parts asynchronously if the store is empty.
 * For now will fetch dummy data from server with a time-out
 */
class Header extends React.Component {

    componentDidMount(){
        //fetch data to populate components
        
    }

    render(){	
        return (
            <header>                
                <div className='headNav'>
                    <div className="logo">
                        <img className='baccaImg' src= {baccaWriting}/>
                        <img className='baccaIcon' src= {baccaIcon}/>
                        <span className='NavFacebook'><i className="ba-facebook-logo-button"></i></span>
                        <span className='NavTwiter'><i className="ba-twitter"></i></span>
                    </div>               
                </div>

                <div className='NavTopright'>
                    
                    <div className='loggedOut'>
                        <div className='signupButton'>
                            <div>
                                <span>Sign up</span>
                                <span>Sign in</span>
                            </div>
                        </div>
                    </div>
                    <div className='loggedIn'>
                       <UserMenu/>                       
                    </div>                            
                </div>              
            </header>
            )
        }
}

// Retrieve data from store/state as props
const mapStateToProps = (state) =>{
  return {
	  login: state.toggleLogin,
	  userMenuIcon: state.ToggleUserMenuIcon
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
	  loginDetails: (url) => dispatch(fetchUserLoginDetails(url))		
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
