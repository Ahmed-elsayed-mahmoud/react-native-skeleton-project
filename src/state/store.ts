import Logger from "redux-logger"
import { persistReducer, persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { configureStore, Middleware } from "@reduxjs/toolkit"
import Reactotron from "@reactnativeskeletonproject/services/reactotron"
import { isDevEnv } from "@reactnativeskeletonproject/utils"
import initialState from "./initialState"
import persistConfig from "./persistConfig"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const configureAppStore = () => {
  // Reactotron & Saga configuration
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const loggerMiddleware: Middleware = Logger

  const appStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: isDevEnv ? [sagaMiddleware, loggerMiddleware] : [sagaMiddleware],
    devTools: false,
    preloadedState: initialState,
    enhancers: [Reactotron.createEnhancer()],
  })

  sagaMiddleware.run(rootSaga)
  return appStore
}

const store = configureAppStore()
const persistor = persistStore(store)

export { store, persistor }
