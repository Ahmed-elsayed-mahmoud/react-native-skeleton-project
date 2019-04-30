import React from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import styles from "./styles"

class ScreenB extends React.Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen B</Text>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenB)
