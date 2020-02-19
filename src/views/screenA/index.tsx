import * as React from "react"
import { Button, Text, View } from "react-native"
import { connect } from "react-redux"
import { SafeAreaView } from "react-native-safe-area-context"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import { clickAction } from "@reactnativeskeletonproject/state/ducks/screenA"
import { IHomeNavigationProps } from "@reactnativeskeletonproject/navigation/types"
import styles from "./styles"

interface IScreenParams {}

interface IScreenAProps {
  counter: number
  clickButton: () => {}
}

class ScreenA extends React.Component<IHomeNavigationProps<IScreenAProps, AppRoute.ScreenA>> {
  public render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to Screen A</Text>
          <Text style={styles.text}>{this.props.counter}</Text>
          <Button title={"increment"} onPress={this.props.clickButton} />
          <Button title={"Go to Screen B"} onPress={this.navigateToScreenB} />
        </View>
      </SafeAreaView>
    )
  }

  private navigateToScreenB = () => this.props.navigation.navigate(AppRoute.ScreenB)
}

const mapStateToProps = (state) => ({
  counter: state.screenA.counter,
})

const mapDispatchToProps = (dispatch) => ({
  clickButton: () => dispatch(clickAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenA)
