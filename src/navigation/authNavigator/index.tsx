import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { IAuthParamList } from "./types"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import Login from "@reactnativeskeletonproject/views/login"
import ForgetPassword from "@reactnativeskeletonproject/views/forgetPassword"

const AuthStack = createStackNavigator<IAuthParamList>()

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={AppRoute.Login} mode="card">
      <AuthStack.Screen name={AppRoute.Login} component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen
        name={AppRoute.ForgetPassword}
        component={ForgetPassword}
        options={{ title: "Forget Password" }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
