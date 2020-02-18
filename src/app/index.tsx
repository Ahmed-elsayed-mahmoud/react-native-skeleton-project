import * as React from "react"
import { SafeAreaView } from "react-navigation"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { AppContainer, NavigationService } from "@reactnativeskeletonproject/navigation"
import { persistor, store } from "@reactnativeskeletonproject/state"
import { isDevEnv } from "@reactnativeskeletonproject/utils"

if (isDevEnv) {
  import("../services/reactotron")
    .then(() => console.log("Reactotron Configured"))
    .catch((error) => console.error(error))
}

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
            <AppContainer
              ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
            />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}
