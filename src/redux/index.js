import { createStore, combineReducers  } from "redux"
import { ModeReducer } from "./store/ModeReducer"
import { LanguageReducer } from "./store/LanguageReducer"
import { SubmenuReducer } from "./store/ShowedSubmenuReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { ActiveOneReducer } from "./store/ActiveOneReducer"
import { ActiveTwoReducer } from "./store/ActiveTwoReducer"
import { ActiveThreeReducer } from "./store/ActiveThreeReducer"

const rootReducer = combineReducers({
    mode: ModeReducer,
    language: LanguageReducer,
    submenu: SubmenuReducer,
    activeOne: ActiveOneReducer,
    activeTwo: ActiveTwoReducer,
    activeThree: ActiveThreeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
