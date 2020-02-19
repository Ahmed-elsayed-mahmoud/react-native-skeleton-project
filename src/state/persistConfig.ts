import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import { PersistConfig } from "redux-persist"
import { AppStorage } from "@reactnativeskeletonproject/services/storage"
import { IScreenState } from "./types"

const persistConfig: PersistConfig<IScreenState> = {
  key: "root",
  storage: AppStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["screenA"],
}

export default persistConfig
