import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import { IEmpty } from "@reactnativeskeletonproject/utils/types"
import { IHomeNavigationProps } from "@reactnativeskeletonproject/navigation/types"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import styles from "./styles"

type IScreenBProps = IEmpty

class ScreenB extends Component<IHomeNavigationProps<IScreenBProps, AppRoute.ScreenB>> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen B</Text>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenB)
