import { Dimensions, Platform } from "react-native"

export const isIOS = () => Platform.OS === "ios"

export const isAndroid = () => Platform.OS === "android"

export const isDevEnv = () => __DEV__ === true

export const getDeviceVersion = () => Platform.Version

export const getWindowHeight = () => Dimensions.get("window").height

export const getWindowWidth = () => Dimensions.get("window").width
