import React, { Component } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistor, store } from "../state/store"
import { ScreenA } from "../views"

if (__DEV__) {
  import("../../ReactotronConfig")
    .then(() => console.log("Reactotron Configured"))
    .catch((error) => console.error(error))
}

interface IProps {}
export default class App extends Component<IProps> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ScreenA />
        </PersistGate>
      </Provider>
    )
  }
}
