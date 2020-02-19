import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type IHomeParamList = {
  [AppRoute.ScreenA]: undefined
  [AppRoute.ScreenB]: { counter: number }
}

export type IHomeNavigationProps<P, R extends keyof IHomeParamList> = P & {
  navigation: StackNavigationProp<IHomeParamList, R>
  router: RouteProp<IHomeParamList, R>
}
