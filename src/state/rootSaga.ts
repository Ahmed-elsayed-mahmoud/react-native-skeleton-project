import { SagaIterator } from "redux-saga"
import { all, call } from "redux-saga/effects"
import { screenASubscription } from "./ducks/screenADucks"
// import { sharedASubscription } from "./ducks/sharedDucks"

export default function* rootSaga(): SagaIterator {
  yield all([call(screenASubscription) /*, call(sharedASubscription)*/])
}
