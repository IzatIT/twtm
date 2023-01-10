const defaultState = {
    mode: JSON.parse(localStorage.getItem('mode')) === false ? false : true
}


export const ModeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'MODE_CHANGE':
            localStorage.setItem('mode', JSON.stringify(!state.mode))
            return { ...state, mode: !state.mode }
        default:
            return state
    }
}