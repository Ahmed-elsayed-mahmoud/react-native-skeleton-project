import React from "react"
import { Button, Text, View } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { connect } from "react-redux"
import routes from "../../navigation/routes"
import { clickAction } from "../../state/ducks/screenADucks"
import styles from "./styles"

interface IScreenAProps extends NavigationScreenProps {
  counter: number
  clickButton: () => {}
}

class ScreenA extends React.Component<IScreenAProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen A</Text>
        <Text style={styles.text}>{this.props.counter}</Text>
        <Button title={"increment"} onPress={this.props.clickButton} />
        <Button title={"Go to Scren B"} onPress={this.navigateToScreenB} />
      </View>
    )
  }

  private navigateToScreenB = () => this.props.navigation.navigate(routes.screenB)
}

const mapStateToProps = (state) => ({
  counter: state.screenA.counter
})

const mapDispatchToProps = (dispatch) => ({
  clickButton: () => dispatch(clickAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenA)
