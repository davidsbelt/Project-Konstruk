// Export action functions

/**toggle the login button  */
export function toggleLogin(bool){
    return {
        type: 'TOGGLE_LOGIN',
        showLogin: bool
    }
}

/**toggle the user menu icon after the login */
export function toggleUserMenuIcon(bool) {
    return {
        type: 'TOGGLE_USER_MENU_ICON',
        showUserMenuIcon: bool
    }
}

/**fetch user details to be used in rendering the custom face of the  */
export function fetchLoginDetails(loginDetails){
    return {
        type: 'FETCH_LOGIN_DETAILS',
        loginDetails
    }
}