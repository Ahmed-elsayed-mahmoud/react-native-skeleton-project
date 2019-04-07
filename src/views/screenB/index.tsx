import React from "react"
import { Text, View } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { connect } from "react-redux"
import styles from "./styles"

interface IScreenBProps extends NavigationScreenProps {
  counter: number
  clickButton: () => {}
}

class ScreenA extends React.Component<IScreenBProps> {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen B</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenA)
