
const defaultState = {
    inputValue: ''
}
export const inputReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}