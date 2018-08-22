import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './Header.css';
import baccaIcon from '../../../../assets/pictures/bacca icon 2.svg';
import baccaWriting from '../../../../assets/pictures/bacca writing.svg';
import '../../../../assets/fonts/bacca-fonts.css';
import UserMenu from '../UserMenu/UserMenu.js';


/**
 * sibling/otherwise (e.g post reading) component triggering the customNav will dispatch
 * header action for the customNav on mount and agian on dismounting
 */
class Header extends React.Component {

    componentDidMount(){
        //fetch data to populate components
        //dispatch action to get users data
        
    } 

        

    render(){	
        /*calls the login method in authentication service assuming auth0
        login = () => {
            this.props.auth.login();
        }
        // calls the logout method in authentication service
        logout = () => {
            this.props.auth.logout();
        }
        */
        /* authentication simulating function, should be later changed to something
        like:

        const {isAuthenticated} = this.props.auth;

        assuming auth0
        */  
        const isAuthenticated = () => {
            return true;//simulate an authenticated connection
        }

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



                <div>
                    {this.props.showCustomnav && (
                            <div className='edit this with a custom nav component'></div>
                        )
                    }
                </div>
                
                
                <div className='NavTopright'>
                    
                    {
                        isAuthenticated() && (
                        <div className='loggedOut'>
                            <div className='signupButton'>
                                <div>
                                    <span>Sign up</span>
                                    <span>Sign in</span>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    {
                        !isAuthenticated() && (
                        <div className='loggedIn'>
                            <UserMenu/>                       
                        </div>
                        )
                    }
                                                
                </div>              
            </header>
            )
        }
}

// Retrieve data from store/state as props
const mapStateToProps = (state) =>{
  return {
	  showCustomnav: state.toggleCustomNav
  };
}



export default connect(mapStateToProps)(Header);
