import { FSA, FSAWithPayload } from "flux-standard-action"

// Action Types must be prefixed by screen name
// to guarantee uniqueness
export enum ScreenAActionType {
  ClickBtn = "screenA/clickBtn",
  Increment = "screenA/increment",
}

export type IClickBtnAction = FSA<ScreenAActionType.ClickBtn>

export type IIncrementAction = FSAWithPayload<
  ScreenAActionType.Increment,
  {
    count: number
  }
>

export type IScreenAAction = IClickBtnAction | IIncrementAction

export interface IScreenAState {
  counter: number
}
