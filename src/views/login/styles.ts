import { StyleSheet } from "react-native"
import { ViewStyleSheet } from "@reactnativeskeletonproject/utils"

const viewStyles = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  credentialContainer: {
    margin: 10,
  },
})

const styles = StyleSheet.create({
  ...viewStyles,
})

export default styles
