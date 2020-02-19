import { put, takeLatest } from "redux-saga/effects"
import {
  ScreenAActionType,
  IIncrementAction,
  IClickBtnAction,
  IScreenAState,
  IScreenAAction,
} from "./types"

// Action Creators
export const clickAction = (): IClickBtnAction => ({
  type: ScreenAActionType.ClickBtn,
})

export const incrementAction = (count = 1): IIncrementAction => ({
  type: ScreenAActionType.Increment,
  payload: {
    count,
  },
})

// Reducer
const initialState: IScreenAState = {
  counter: 0,
}

export default function(
  state: IScreenAState = initialState,
  action: IScreenAAction
): IScreenAState {
  switch (action.type) {
    case ScreenAActionType.Increment:
      return { counter: state.counter + action.payload.count }
    default:
      return state
  }
}

// Sagas
function* clickButton() {
  yield put(incrementAction())
}

export function* screenASubscription() {
  yield takeLatest(ScreenAActionType.ClickBtn, clickButton)
}
