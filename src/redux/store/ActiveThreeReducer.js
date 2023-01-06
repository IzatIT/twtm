
const defaultState = {
    active: 0
}

export const ActiveThreeReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ACTIVETHREE' :
            return {...state, active: action.payload}
        default: 
            return state
    }
}