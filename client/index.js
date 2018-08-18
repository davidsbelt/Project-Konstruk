import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root.js'

//initialize store
import {configureStore} from './store'

//mock data
import mockData from './dummyData.js'


const store = configureStore({}); //this function cant take an initial_state as arguement
ReactDOM.render(
  <AppContainer>
    <Root store = {store}/>
  </AppContainer>,
  document.getElementById('root')
);

//for hot-reloading of react components
if(module.hot){
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp  = require('./Root').default; //eslint-disable-line global-require
    ReactDom.render(
      <AppContainer>
        <Root store = {store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
