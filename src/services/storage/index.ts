import AsyncStorage from "@react-native-community/async-storage"

const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.log(e)
  }
}

export default { storeItem, getItem }
