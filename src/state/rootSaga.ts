import { all, call } from "redux-saga/effects"
import { screenASubscription } from "./ducks/screenADucks"
// import { sharedASubscription } from "./ducks/sharedDucks"

export default function* rootSaga() {
  yield all([call(screenASubscription) /*, call(sharedASubscription)*/])
}
