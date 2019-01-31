"use strict";

import { Auth } from "aws-amplify";
import React from "react";
import CodeInput from "react-native-confirmation-code-field";

import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../globalStyles";

import { graphql, withApollo } from "react-apollo";
import gql from "graphql-tag";

const CREATE_USER_RECORD = gql`
  mutation CreateUserRecord(
    $backhand: Backhand
    $forehand: Forehand
    $tennisStyle: TennisStyle
  ) {
    createUserRecord(
      backhand: $backhand
      forehand: $forehand
      tennisStyle: $tennisStyle
    ) {
      ladders
    }
  }
`;

class EmailVerification extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }

  _onResendCode = () => {
    const { params } = this.props.navigation.state;
    const email = params.email;

    console.log("_onResendCode: ", email);
    Auth.resendSignUp(email)
      .then(data => Alert.alert("Code was sent", "please check your email"))
      .catch(err => console.log("resend error: ", err));
  };

  _onFulfilled = code => {
    const { params } = this.props.navigation.state;
    const username = params.email;
    const password = params.password;

    console.log(
      "_onFulfilled: ",
      code,
      ", username: ",
      username,
      " password: ",
      password
    );
    Auth.confirmSignUp(username, code)
      .then(data => Auth.signIn(username, password))
      .catch(err => {
        console.log("_onFulfilled: error = ", err);
        Alert.alert("Code validation failed", "please try again");
      })
      .then(user => this.createUserRecord())
      .catch(err => console.log("createUserRecord error: ", err))
      .then(data => Auth.signOut())
      .then(data => this._openHomePage())
      .catch(err => console.log("openLadderSelect error: ", err));
  };

  createUserRecord = () => {
    const { params } = this.props.navigation.state;
    return this.props.client.mutate({
      mutation: CREATE_USER_RECORD,
      variables: {
        backhand: params.backhand,
        forehand: params.forehand,
        tennisStyle: params.tennisStyle
      }
    });
  };

  _openHomePage = () => {
    return this.props.navigation.navigate("Home");
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
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Email Verification</Text>
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
          onFulfill={code => this._onFulfilled(code)}
        />

        <View style={styles.resendContainer}>
          <TouchableOpacity
            style={styles.resendButton}
            onPress={this._onResendCode}
          >
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withApollo(EmailVerification);

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
    backgroundColor: "#FFF"
  },
  codeInputNotEmpty: {
    backgroundColor: "rgba(0,0,0,0)"
  }
});
