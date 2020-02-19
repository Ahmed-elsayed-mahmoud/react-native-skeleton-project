import * as React from "react"
import { Button, View } from "react-native"
import { connect } from "react-redux"
import AppRoute from "@reactnativeskeletonproject/navigation/routes"
import { IAuthNavigationProps } from "@reactnativeskeletonproject/navigation/types"
import { IEmpty } from "@reactnativeskeletonproject/utils"
import { Input } from "@reactnativeskeletonproject-ui/Input"
import styles from "./styles"

type ILoginProps = IEmpty

enum UserCredential {
  Email,
  Password,
}

class Login extends React.Component<IAuthNavigationProps<ILoginProps, AppRoute.Login>> {
  public render() {
    return (
      <View style={styles.container}>
        {this.renderCredentialInput(UserCredential.Email)}
        {this.renderCredentialInput(UserCredential.Password)}
        <Button
          title={"Login"}
          onPress={() => {
            console.log("Login pressed")
          }}
        />
        <Button
          title={"forget password?"}
          onPress={() =>
            this.props.navigation.navigate(AppRoute.ForgetPassword, {
              email: "example@address.com",
            })
          }
        />
      </View>
    )
  }

  private renderCredentialInput(type: UserCredential) {
    const label = type === UserCredential.Email ? "Your Email Address" : "Password"
    const placeholder = type === UserCredential.Email ? "example@address.com" : "Password"
    const errorMessage =
      type === UserCredential.Email ? "Enter a valid email" : "Incorrect password"

    return (
      <Input
        containerStyle={styles.credentialContainer}
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
