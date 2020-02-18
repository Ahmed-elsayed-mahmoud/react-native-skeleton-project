import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { isIOS } from "@reactnativeskeletonproject/utils"
import * as Screens from "@reactnativeskeletonproject/views"
import routes from "./routes"

const appNavigator = createStackNavigator(
  {
    [routes.screenA]: {
      screen: Screens.ScreenA,
    },
    [routes.screenB]: {
      screen: Screens.ScreenB,
    },
  },
  {
    // StackNavigatorConfig
    initialRouteName: routes.screenA,
    headerMode: isIOS ? "none" : "screen",
  }
)

export default createAppContainer(appNavigator)
