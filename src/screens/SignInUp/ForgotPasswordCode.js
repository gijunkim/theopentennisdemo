"use strict";

import { Auth } from "aws-amplify";
import React from "react";
import CodeInput from "react-native-confirmation-code-field";

import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../globalStyles";

export default class EmailVerification extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }

  _onCodeChanged = (val, email) => {
    console.log("_onCodeChanged: ", val);
    if (val.length == 6) {
      console.log("calling confirm: ", val, ", email: ", email);
      Auth.confirmSignUp(email, val)
        .then(data => this._openSignInPage())
        .catch(err =>
          this._openNotification("Code validation failed", "please try again")
        );
    }
  };

  _onResendCode = email => {
    console.log("_onResendCode: ", email);
    Auth.resendSignUp(email)
      .then(data =>
        this._openNotification("Code was sent", "please check your email")
      )
      .catch(err => console.log("resend error: ", err));
  };

  _openNotification = (title, msg) => {
    Alert.alert(title, msg);
  };

  _openForgotPasswordNew = () => {
    this.props.navigation.navigate("ForgotPasswordNew");
  };

  inputProps = () => ({
    keyboardType: "numeric",
    style: styles.codeInputStyle
  });

  inputStyle = hasValue => {
    if (hasValue) {
      return styles.codeInputNotEmpty;
    }
    return null;
  };

  render() {
    const { params } = this.props.navigation.state;
    //  let email = params.email;

    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Reset Password</Text>
        <Text style={styles.headerDescription}>
          Please Enter the Code Sent to Your Email:
        </Text>
        <CodeInput
          keyboardType="numeric"
          autoFocus={true}
          codeLength={6}
          space={15}
          inputProps={this.inputProps}
          inputStyle={this.inputStyle}
          onFulfill={() => this._openForgotPasswordNew()} //change with addition of Backend
        />
        <View style={styles.resendContainer}>
          <TouchableOpacity
            style={styles.resendButton}
            onPress={() => this._onResendCode(email)}
          >
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: globalStyles.primaryColor
  },
  mainHeader: {
    fontSize: 22,
    color: globalStyles.backgroundColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    alignSelf: "center",
    marginTop: 10
  },
  headerDescription: {
    fontSize: 16,
    color: globalStyles.backgroundColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    alignSelf: "center",
    paddingTop: 40
  },
  resendContainer: {
    flex: 1,
    alignItems: "center",
    width: "50%"
  },
  resendButton: {
    width: "80%",
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center"
  },
  resendText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook
  },
  codeInputStyle: {
    height: 50,
    width: 40,
    borderRadius: 3,
    backgroundColor: "#FFF",
    alignSelf: "center"
  },
  codeInputNotEmpty: {
    backgroundColor: "rgba(0,0,0,0)",
    alignSelf: "center"
  }
});
