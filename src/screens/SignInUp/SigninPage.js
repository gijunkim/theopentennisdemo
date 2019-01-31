"use strict";

import React, { Component } from "react";
import { Auth } from "aws-amplify";

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from "../../globalStyles";
import Logo from "../../components/logo";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class App extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPass: true,
      press: false
    };
  }

  _OnshowPassPressed = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  _onSigninPressed = () => {
    console.log("_onSigninPressed");
    Keyboard.dismiss();
    Auth.signIn(this.state.username, this.state.password)
      .then(user => this._openLadderNews(user))
      .catch(err => this._openSignInError(err));
  };

  _openLadderNews = user => {
    console.log("_openLadderNews ", user);
    this.props.navigation.navigate("LadderNews", {
      username: this.state.username
    });
  };

  _openSignInError = err => {
    console.log("_openSignInError: ", err);
    Alert.alert("Sign in error", "Please try again later");
  };

  _openForgotPasswordForm = () => {
    console.log("_openForgotPasswordForm");
    this.props.navigation.navigate("ForgotPasswordForm");
  };

  _onSignupPressed = () => {
    console.log("_onSignupPressed");
    this.props.navigation.navigate("SignupPage");
  };

  render() {
    console.log("Signin.render");

    return (
      <View style={styles.mainView}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            backgroundColor: globalStyles.backgroundColor
          }}
          keyboardShouldPersistTaps={"handled"}
        >
          <Logo style={styles.logo} />

          <View style={styles.form}>
            <Text style={styles.headerLabel}>Username</Text>

            <View style={styles.usernameContainer}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="your@email.com"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={username => this.setState({ username })}
                />
              </View>
            </View>

            <Text style={styles.headerLabel}>Password</Text>

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

              <TouchableOpacity
                style={styles.btnEye}
                onPress={this._OnshowPassPressed.bind(this)}
              >
                <Icon
                  name={this.state.press == false ? "md-eye" : "md-eye-off"}
                  size={26}
                  color={globalStyles.primaryColor}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btnForgotPassword}
              onPress={this._openForgotPasswordForm}
            >
              <Text style={styles.btnForgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginView}
              onPress={this._onSigninPressed}
            >
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signView}
              onPress={this._onSignupPressed}
            >
              <Text style={styles.signText}>
                Don't have an account?{" "}
                <Text style={[styles.signText, styles.underline]}>
                  Sign Up Here
                </Text>{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  logo: {
    flex: 5,
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    flex: 1,
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInputView: {
    width: "100%",
    height: 50,
    justifyContent: "center"
  },
  textInput: {
    flex: 1,
    width: "100%",
    height: 45,
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook
  },
  loginView: {
    width: globalStyles.buttonsWidth,
    height: 50,
    backgroundColor: globalStyles.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "6%",
    borderRadius: 25
  },
  loginText: {
    fontSize: 20,
    color: globalStyles.backgroundColor,
    fontFamily: globalStyles.mainFontBook
  },
  signView: {
    width: WIDTH,
    height: 60,
    backgroundColor: globalStyles.primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  signText: {
    alignSelf: "center",
    fontWeight: "100",
    color: "#fff",
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook
  },
  btnForgotPassword: {
    fontWeight: "100",
    fontFamily: globalStyles.mainFontBook,
    marginLeft: "68%",
    marginTop: "1%"
  },
  btnForgotPasswordText: {
    color: "#9D9D9D",
    fontSize: 12,
    fontFamily: globalStyles.mainFontBook
  },
  headerLabel: {
    alignSelf: "stretch",
    fontSize: 13,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginBottom: "-2%"
  },
  underline: { textDecorationLine: "underline" },
  passwordContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor
  },
  btnEye: {
    flex: 1
  },
  textInputPasswordView: {
    flex: 10,
    height: 50,
    justifyContent: "center"
  },
  usernameContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    marginBottom: 5
  }
});
