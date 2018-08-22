// Import Actions
import { TOGGLE_CUSTOMNAV } from './HeaderActions.js';

/**toggle custom nav reducer */

const initialState = {
    showCustomNav: false,
};

const toggleCustomNav = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_CUSTOMNAV:
            return {
                showCustomNav: !state.showCustomNav,
            }
        default:
            return state;  
    }  
}

export default toggleCustomNav