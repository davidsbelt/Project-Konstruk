// Export constants

export const TOGGLE_CUSTOMNAV = 'TOGGLE_CUSTOMNAV';
 
//this action will be dispatched from the read post view to customize the header for the post being read
export function toggleCustomNav(bool){
    return {
        type: TOGGLE_CUSTOMNAV,
        show: bool,
    }
}


