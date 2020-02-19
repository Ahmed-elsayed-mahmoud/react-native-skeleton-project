import reducers from "./reducers"

export type IReducers = typeof reducers

// Global App State
export type IAppState = ReturnType<IReducers[keyof IReducers]>

// Type of each screen state
export type IScreenState = {
  [key in keyof IReducers]: ReturnType<IReducers[key]>
}

// Type of each  screen action
export type IScreenAction = {
  [key in keyof IReducers]: Parameters<typeof reducers[key]>[1]
}
