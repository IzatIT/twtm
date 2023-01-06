
const defaultState = {
    language: 'ru-RU'
}

export const LanguageReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'CHANGE': 
            return {...state, language: action.payload}
        default: 
            return state
    }
}