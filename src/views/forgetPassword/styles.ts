import { StyleSheet } from "react-native"
import { ViewStyleSheet, TextStyleSheet } from "@reactnativeskeletonproject/utils/types"

const viewStyles = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  emailContainer: {
    margin: 10,
  },
})

const textStyles = TextStyleSheet({
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
})

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
})

export default styles
