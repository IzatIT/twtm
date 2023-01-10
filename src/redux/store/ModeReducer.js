const defaultState = {
    mode: JSON.parse(localStorage.getItem('mode')) === false ? false : true
}


export const ModeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'MODECHANGE': 
            return (
                { ...state, mode: !state.mode }
            )
        default:
            return state
    }
}