import { combineReducers } from "redux"
import screenAReducer from "./ducks/screenADucks"
// import sharedReducer from "./ducks/sharedDucks"

export default combineReducers({ screenA: screenAReducer /*, shared: sharedReducer */ })
