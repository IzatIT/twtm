
const defaultState = {
    error: ''
}

export const ErrorReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ERROR' :
            return {...state, error: action.payload}
        default:
            return state
    }
}