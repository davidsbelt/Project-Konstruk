import createHistory from 'history/createBrowserHistory';
/**connect the routes to redux */
import {connectRoutes} from 'redux-first-router';
/**Root reducer */
import {combineReducers} from 'redux';
import routePaths from './routesMap';


/*import all the reducers here*/
import { toggleLogin, toggleUserMenuIcon} from './modules/App/AppReducer.js'

const history = createHistory();
const {reducer, middleware, enhancer} = connectRoutes(history, routePaths);

export const routerMiddleware = middleware;
export const routerEnhancer = enhancer;



/**export all the combined reducers */
export default combineReducers({
    location: reducer,
    toggleLogin,
    toggleUserMenuIcon  
});

