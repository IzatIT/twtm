
const defaultState = {
    active: 0,
}

export const ActiveTwoReducer = (state = defaultState, action) => {
switch (action.type) {
    case 'ACTIVETWO':
        return { ...state, active: action.payload }
    default:
        return state
}
}