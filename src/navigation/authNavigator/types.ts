import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"

export type IAuthParamList = {
  [AppRoute.Login]: undefined
  [AppRoute.ForgetPassword]: { email: string }
}

export type IAuthNavigationProps<P, R extends keyof IAuthParamList> = P & {
  navigation: StackNavigationProp<IAuthParamList, R>
  route: RouteProp<IAuthParamList, R>
}
