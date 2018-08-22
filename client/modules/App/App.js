/**
 * Client entry point
 */

import React, {PropTypes} from 'react';
import scenes from '../../scenes.js';
import {connect} from 'react-redux';
/*import './assets/fonts/bacca-fonts.css';
import './assets/fonts/letter-fonts/letter-fonts.css';*/
import SubNav from './components/SubNav/SubNav.js';
import Header from './components/Header/header.js';



class App extends React.Component {

render(){
	return (
		<div style={{margin:'0px', fontFamily:'open sans regular', WebkitFontSmoothing: 'antialiased'}}> 
			<Header/>
			<SubNav/>
			<div>
                {scenes[this.props.location.type]}
            </div>
		</div>
		)
	}
}

const mapStateToProps = (state) =>{
  return {
	  location: state.location
  };
}

export default connect(mapStateToProps)(App);


