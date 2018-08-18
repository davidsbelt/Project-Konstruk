//export reducers functions

/**toggle login reducer */
export function toggleLogin (state = true, action){
    switch (action.type){
        case 'TOGGLE_LOGIN':
            return action.showLogin;
        default:
            return state;  
    }  
}

/**toggle user menu icon */
export function toggleUserMenuIcon(state = false, action){
    switch (action.type){
        case 'TOGGLE_USER_MENU_ICON':
            return action.showUserMenuIcon;
        default:
            return state
    }    
}

/**fetch user login details reducer 
export function fetchUserLoginDetails(state =[], action){
    
}*/