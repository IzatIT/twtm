
const defaultState = {
    showed: -1
}

export const SubmenuReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SHOWED_SUBMENU':
            return {...state, showed: action.payload}
        default:
            return state
    }
}