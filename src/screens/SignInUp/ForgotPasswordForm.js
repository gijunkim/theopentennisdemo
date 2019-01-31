"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import globalStyles from "../../globalStyles";

export default class EmailVerification extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  _openForgotPasswordCodePage = () => {
    this.props.navigation.navigate("ForgotPasswordCode");
  };

  render() {
    console.log("ForgotPasswordForm.render");
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Reset Password</Text>
        <Text style={styles.headerDescription}>
          Please enter your email registered with us. {"\n"}A code will be sent
          for a password reset.{" "}
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="your@email.com"
          onChangeText={val => this.setState({ email: val })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => this._openForgotPasswordCodePage()}
        >
          <Text style={styles.requestText}>Send Request</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primaryColor,
    padding: 30
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
    paddingTop: 40
  },
  requestButton: {
    width: globalStyles.buttonsWidth,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  requestText: {
    fontWeight: "normal",
    color: "#fff",
    fontSize: 20,
    fontFamily: globalStyles.mainFontBook,
    alignSelf: "center"
  },
  textInput: {
    height: 50,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: "25%",
    color: globalStyles.backgroundColor
  }
});
