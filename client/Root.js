/**
 * Root Component
 */

import React, {PropTypes} from 'react';
import App from './modules/App/App.js'
import { Provider } from 'react-redux';

//routes

//Base style sheets
export default function Root(props) {
    return (
        <Provider store = {props.store}>
            <App />
        </Provider>
    )
}
/*
Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};
*/