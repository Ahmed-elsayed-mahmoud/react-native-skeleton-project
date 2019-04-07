import React from "react"
import { Button, Text, View } from "react-native"
import { connect } from "react-redux"
import { clickAction } from "../../state/ducks/screenADucks"
import styles from "./styles"

interface IProps {
  counter: number
  clickButton: () => {}
}

class ScreenA extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.counter}</Text>
        <Button title={"increment"} onPress={this.props.clickButton} />
      </View>
    )
  }
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
