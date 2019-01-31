"use strict";

import React from "react";

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
      password: "",
      showPass: true
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

        <Text style={styles.headerLabel}>Enter new password</Text>

        <View style={styles.passwordContainer}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="• • • • • • • • •"
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPass}
              placeholderStyle={styles.passwordPlaceholderStyle}
              autoCapitalize="none"
            />
          </View>
        </View>

        <Text style={styles.headerLabel}>Confirm new password</Text>

        <View style={styles.passwordContainer}>
          <View style={styles.textInputPasswordView}>
            <TextInput
              style={styles.textInput}
              placeholder="• • • • • • • • •"
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPass}
              placeholderStyle={styles.passwordPlaceholderStyle}
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => this._openForgotPasswordCodePage()}
        >
          <Text style={styles.resetText}>Reset and Sign In</Text>
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
    marginTop: 10,
    marginBottom: 15
  },
  resetButton: {
    width: globalStyles.buttonsWidth,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  resetText: {
    fontWeight: "normal",
    color: "#fff",
    fontSize: 20,
    fontFamily: globalStyles.mainFontBook,
    alignSelf: "center"
  },
  textInput: {
    height: 50,
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    color: globalStyles.backgroundColor
  },
  headerLabel: {
    alignSelf: "stretch",
    fontSize: 16,
    color: globalStyles.backgroundColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    marginBottom: 15
  }
});
