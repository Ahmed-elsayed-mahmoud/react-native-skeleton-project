import { SagaIterator } from "redux-saga"
import { all, call } from "redux-saga/effects"
import Reactotron from "../../ReactotronConfig"
import { screenASubscription } from "./ducks/screenADucks"
// import { sharedASubscription } from "./ducks/sharedDucks"

export default function* rootSaga(): SagaIterator {
  Reactotron.log("saga entered")
  yield all([call(screenASubscription) /*, call(sharedASubscription)*/])
}
