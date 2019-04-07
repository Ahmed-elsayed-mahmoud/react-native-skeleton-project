import { NavigationActions, StackActions } from "react-navigation"

let navigator

function setTopLevelNavigator(navigatorRef): void {
  navigator = navigatorRef
}

function navigate(routeName: string, params?: any, action?: any): void {
  navigator.dispatch(NavigationActions.navigate({ routeName, params, action }))
}

function goBack(): void {
  navigator.dispatch(NavigationActions.back())
}

function push(routeName: string, params?: any, action?: any): void {
  navigator.dispatch(StackActions.push({ routeName, params, action }))
}

function pop(numberOfScreens: number = 0): void {
  navigator.dispatch(StackActions.pop({ n: numberOfScreens }))
}

export const NavigationService = {
  setTopLevelNavigator,
  navigate,
  goBack,
  push,
  pop
}
