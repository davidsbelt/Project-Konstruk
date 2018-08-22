// Import Actions
import { TOGGLE_USER_MENU_ICON } from './AppActions.js';

//export reducers functions

/**toggle user menu icon */
export function toggleUserMenuIcon(state = false, action){
    switch (action.type){
        case TOGGLE_USER_MENU_ICON:
            return action.showUserMenuIcon;
        default:
            return state
    }    
}

