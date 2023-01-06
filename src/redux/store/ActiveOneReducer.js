
const defaultState = {
        active: 0,
}

export const ActiveOneReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTIVEONE':
            return { ...state, active: action.payload }
        default:
            return state
    }
}