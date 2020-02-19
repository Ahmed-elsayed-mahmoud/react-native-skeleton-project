import { all, call } from "redux-saga/effects"
import { screenASubscription } from "./ducks"

export default function* rootSaga() {
  yield all([call(screenASubscription) /*, call(sharedASubscription)*/])
}
