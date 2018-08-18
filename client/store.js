import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//import parts of the router
import {routerMiddleware, routerEnhancer} from './reducers';

export function configureStore(initialState = {}){
    //initial state can be set to data state from the server
    const store = createStore(rootReducer, initialState, 
    compose(
        routerEnhancer,
        applyMiddleware(thunk, routerMiddleware)
        )
    );

    /**for hot reloading */
    if(module.hot){
        //enable webpack hot module replacement for reducers
        module.hot.accept('./reducers', ()=>{
            //you can use rootReducer here instead if you use webpack 2
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        })
    }

    /**return the store object */
    return store;
};