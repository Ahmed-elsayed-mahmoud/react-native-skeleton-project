import * as React from "react"
import { Button, View } from "react-native"
import { connect } from "react-redux"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import { IAuthNavigationProps } from "@reactnativeskeletonproject/navigation/types"
import { IEmpty } from "@reactnativeskeletonproject/utils"
import { Input } from "@reactnativeskeletonproject-ui/Input"
import styles from "./styles"

type IForgetPasswordProps = IEmpty

class Login extends React.Component<
  IAuthNavigationProps<IForgetPasswordProps, AppRoute.ForgetPassword>
> {
  public render() {
    return (
      <View style={styles.container}>
        {this.renderEmailInput()}
        <Button
          title={"Reset Password"}
          onPress={() => {
            console.log("reset pressed")
          }}
        />
      </View>
    )
  }

  private renderEmailInput() {
    return (
      <Input
        containerStyle={styles.emailContainer}
        label={"Your Email Address"}
        placeholder={"Your Email Address"}
        errorMessage={"Enter a valid email"}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
