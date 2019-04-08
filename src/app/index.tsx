import React, { Component } from "react"
import { SafeAreaView } from "react-navigation"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { AppContainer, NavigationService } from "../navigation"
import { persistor, store } from "../state/store"
import { isDevEnv } from "../utils"

if (isDevEnv) {
  import("../services/reactotron")
    .then(() => console.log("Reactotron Configured"))
    .catch((error) => console.error(error))
}

export default class App extends Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
            <AppContainer
              ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
              persistenceKey={"NavigationState"}
            />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}
