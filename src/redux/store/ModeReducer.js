const defaultState = {
    mode: false
}


export const ModeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'MODECHANGE': 
            return {...state, mode: !state.mode}
        default:
            return state
    }
}