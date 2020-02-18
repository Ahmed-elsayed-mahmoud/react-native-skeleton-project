import {
  NavigationActions,
  StackActions,
  NavigationParams,
  NavigationNavigateAction,
} from "react-navigation"

let navigator

function setTopLevelNavigator(navigatorRef): void {
  navigator = navigatorRef
}

function navigate(
  routeName: string,
  params?: NavigationParams,
  action?: NavigationNavigateAction
): void {
  navigator.dispatch(NavigationActions.navigate({ routeName, params, action }))
}

function goBack(): void {
  navigator.dispatch(NavigationActions.back())
}

function push(
  routeName: string,
  params?: NavigationParams,
  action?: NavigationNavigateAction
): void {
  navigator.dispatch(StackActions.push({ routeName, params, action }))
}

function pop(numberOfScreens = 0): void {
  navigator.dispatch(StackActions.pop({ n: numberOfScreens }))
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  push,
  pop,
}
