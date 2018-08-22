// Export constants
export const TOGGLE_USER_MENU_ICON = 'TOGGLE_USER_MENU_ICON';

// Export action functions

/**toggle the user menu icon after the login */
export function toggleUserMenuIcon(bool) {
    return {
        type: TOGGLE_USER_MENU_ICON,
        showUserMenuIcon: bool
    }
}

