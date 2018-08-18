import React from 'react';
import './SubNav.css';
import '../../../../assets/fonts/bacca-fonts.css';
import Search from '../Search/Search.js';
import Link from 'redux-first-router-link';
import {connect} from 'react-redux';


class SubNav extends React.Component {
    render(){	
        return (
            <div className='subNav-case'>
                <div className='sub-nav-search-case'>
                    <div className='search-icon'>
                       <Search/> 
                    </div>
                </div>
                <nav className='subNav-bar'>
                    <ul>
                        <li><Link to={{type: 'FEEDS'}} className='subNav-link'> Home </Link></li>
                        <li><Link to={{type: 'ABOUT'}} className='subNav-link'> About </Link></li>
                        <li><Link to={{type: 'TEST_ARTICLE'}} className='subNav-link'> Article </Link></li>
                    </ul>
                </nav>
                <div className='sub-nav-menu-case'>
                    <div className='menu'><i className="ba-squares-1"></i></div>
                </div>
            </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}

export default connect(mapStateToProps)(SubNav);