import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import { AppStorage } from "@reactnativeskeletonproject/services/storage"

const persistConfig = {
  key: "root",
  storage: AppStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["screenA"],
}

export default persistConfig
