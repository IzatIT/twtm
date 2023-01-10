
const defaultState = {
    activeOne: 0,
    activeTwo: 0,
    activeThree: 0
}

export const ActiveCategoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTIVE_CATEGORY_ONE':
            return { ...state, activeOne: action.payload }
        case 'ACTIVE_CATEGORY_TWO':
            return { ...state, activeTwo: action.payload }
        case 'ACTIVE_CATEGORY_THREE':
            return { ...state, activeThree: action.payload }
        default:
            return state
    }
}