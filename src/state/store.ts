import Logger from "redux-logger"
import { persistReducer, persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { configureStore } from "redux-starter-kit"
import Reactotron from "../../ReactotronConfig"
import { isDevEnv } from "../utils"
import intialState from "./initialState"
import persistConfig from "./persistConfig"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const configureAppStore = () => {
  // Reactotron & Saga configuration
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const appStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: isDevEnv ? [sagaMiddleware, Logger] : [sagaMiddleware],
    devTools: false,
    preloadedState: intialState,
    enhancers: [Reactotron.createEnhancer()]
  })

  sagaMiddleware.run(rootSaga)
  return appStore
}

const store = configureAppStore()
const persistor = persistStore(store)

export { store, persistor }
