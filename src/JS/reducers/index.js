import {combineReducers} from  "redux"
import reducerCounter from "./reducerCounter"

const rootReducers= combineReducers({reducerCounter: reducerCounter})


export default rootReducers