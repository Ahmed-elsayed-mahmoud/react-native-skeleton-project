import { SagaIterator } from "redux-saga"
import { put, takeLatest } from "redux-saga/effects"

// Action Types
const BTN_CLICK = "btn_click"
const INCREMENT = "increment"

// Action Creators
export const clickAction = () => ({
  type: BTN_CLICK
})

export const incrementAction = () => ({
  type: INCREMENT
})

// Reducer
interface IScreenAState {
  counter: number
}

const initialState: IScreenAState = {
  counter: 0
}

export default function(state = initialState, action): IScreenAState {
  switch (action.type) {
    case INCREMENT:
      return { counter: ++state.counter }
    default:
      return state
  }
}

// Sagas
function* clickButton(action): SagaIterator {
  yield put(incrementAction())
}

export function* screenASubscription(): SagaIterator {
  yield takeLatest(BTN_CLICK, clickButton)
}
