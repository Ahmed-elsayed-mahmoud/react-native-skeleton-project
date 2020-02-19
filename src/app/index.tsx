import React, { Component } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { AppNavigator } from "@reactnativeskeletonproject/navigation"
import { persistor, store } from "@reactnativeskeletonproject/state"
import { IS_DEV_ENV } from "@reactnativeskeletonproject/utils"

if (IS_DEV_ENV) {
  import("../services/reactotron")
    .then(() => console.log("Reactotron Configured"))
    .catch((error) => console.error(error))
}

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <AppNavigator authToken="" />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
