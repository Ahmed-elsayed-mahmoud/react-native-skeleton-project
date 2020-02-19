import { IAuthParamList } from "@reactnativeskeletonproject/navigation/authNavigator/types"
import { IHomeParamList } from "@reactnativeskeletonproject/navigation/homeNavigator/types"

export interface IAppNavigatorProps {
  authToken?: string
}

export type IAppParamList = IAuthParamList & IHomeParamList
