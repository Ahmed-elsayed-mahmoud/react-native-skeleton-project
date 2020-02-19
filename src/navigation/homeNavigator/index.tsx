import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import ScreenA from "@reactnativeskeletonproject/views/screenA"
import ScreenB from "@reactnativeskeletonproject/views/screenB"
import { IHomeParamList } from "./types"

const HomeStack = createStackNavigator<IHomeParamList>()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={AppRoute.ScreenA}
      headerMode="screen"
      screenOptions={{ headerTitle: "Home" }}>
      <HomeStack.Screen name={AppRoute.ScreenA} component={ScreenA} />
      <HomeStack.Screen name={AppRoute.ScreenB} component={ScreenB} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
