import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "@reactnativeskeletonproject/navigation/authNavigator"
import HomeNavigator from "@reactnativeskeletonproject/navigation/homeNavigator"
import NavigationService from "@reactnativeskeletonproject/navigation/navigationService"
import { IAppNavigatorProps } from "./types"

const AppNavigator = (props: IAppNavigatorProps) => {
  const { authToken } = props
  return (
    <NavigationContainer
      ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
      {authToken ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
