"use strict";

import React from "react";
import { Auth } from "aws-amplify";
import TennisCheckBox from "../../components/TennisCheckBox";

import globalStyles from "../../globalStyles";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

const TENNISSTYLE = {
  ALLCOURT: "ALLCOURT",
  BASELINE: "BASELINE",
  COUNTERPUNCHER: "COUNTERPUNCHER",
  SERVEVOLLEY: "SERVEVOLLEY"
};

const FOREHAND = {
  LEFT: "LEFT",
  RIGHT: "RIGHT"
};

const BACKHAND = {
  ONEHANDED: "ONEHANDED",
  TWOHANDED: "TWOHANDED"
};

export default class SignupPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
      tennisStyle: null,
      forehand: null,
      backhand: null,
      showPass: true
    };
  }

  _onTennisStyleChanged = val => {
    this.setState({ tennisStyle: val });
  };
  _onForehandChanged = val => {
    this.setState({ forehand: val });
  };
  _onBackhandChanged = val => {
    this.setState({ backhand: val });
  };

  _OnshowPassPressed = () => {
    if (this.state.showPass) {
      this.setState({ showPass: false });
    } else {
      this.setState({ showPass: true });
    }
  };

  _onSignupPressed = () => {
    const email = this.state.email;
    const phone = this._parsePhoneNumber(this.state.phone);
    const password = this.state.password;
    console.log(
      "_onSignupPressed: email = ",
      email,
      ", phone = ",
      phone,
      " password = ",
      password
    );
    Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        phone_number: phone
      }
    })
      .then(data => this._openVerification())
      .catch(err => this._openSignUpError(err));
  };

  _openVerification = () => {
    this.props.navigation.navigate("EmailVerification", this.state);
  };

  _openSignUpError = err => {
    console.log("_openSignUpError: ", err);
    Alert.alert("Sign up error", "Please try again later");
  };

  _parsePhoneNumber = number => {
    // AWSPhoneNumber is in +1234567890 format
    let numberOnly = number.replace(/[^\d]/g, "");
    return "+" + numberOnly;
  };

  render() {
    console.log("Signup.render");
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: globalStyles.backgroundColor
        }}
        keyboardShouldPersistTaps={"handled"}
      >
        <View style={styles.container}>
          <Text style={styles.mainHeader}>Sign Up</Text>

          <Text style={styles.header}>Email</Text>

          <TextInput
            style={styles.textInput}
            placeholder="your@email.com"
            onChangeText={val => this.setState({ email: val })}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.header}>Password</Text>

          <View style={styles.passwordContainer}>
            <View style={styles.textInputPasswordView}>
              <TextInput
                style={styles.textInputPW}
                placeholder="• • • • • • • • •"
                onChangeText={val => this.setState({ password: val })}
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
                name={this.state.showPass ? "md-eye" : "md-eye-off"}
                size={26}
                color={globalStyles.primaryColor}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.header}>Phone</Text>

          <TextInput
            style={styles.textInput}
            placeholder="+1-123-456-7890"
            onChangeText={val => this.setState({ phone: val })}
            underlineColorAndroid="transparent"
            placeholderStyle={styles.passwordPlaceholderStyle}
            keyboardType={"phone-pad"}
          />

          <View style={styles.lineStyle} />
          <View style={styles.lineStyle2} />
          <View style={styles.lineStyle3} />
          <View style={styles.lineStyle4} />

          <Text style={styles.header}>Style</Text>
          <View style={styles.checkboxContainer}>
            <TennisCheckBox
              label="Serve & Volley"
              checked={this.state.tennisStyle === TENNISSTYLE.SERVEVOLLEY}
              onChange={val =>
                this._onTennisStyleChanged(TENNISSTYLE.SERVEVOLLEY)
              }
            />

            <View style={styles.emptyContainer} />

            <TennisCheckBox
              label="Baseline"
              checked={this.state.tennisStyle === TENNISSTYLE.BASELINE}
              onChange={val => this._onTennisStyleChanged(TENNISSTYLE.BASELINE)}
            />
          </View>
          <View style={styles.lastCheckboxContainer}>
            <TennisCheckBox
              label="Counterpuncher"
              checked={this.state.tennisStyle === TENNISSTYLE.COUNTERPUNCHER}
              onChange={val =>
                this._onTennisStyleChanged(TENNISSTYLE.COUNTERPUNCHER)
              }
            />

            <View style={styles.emptyContainer} />

            <TennisCheckBox
              label="All-court"
              checked={this.state.tennisStyle === TENNISSTYLE.ALLCOURT}
              onChange={val => this._onTennisStyleChanged(TENNISSTYLE.ALLCOURT)}
            />
          </View>

          <Text style={styles.header}>Forehand</Text>

          <View style={styles.lastCheckboxContainer}>
            <TennisCheckBox
              label="Right"
              checked={this.state.forehand === FOREHAND.RIGHT}
              onChange={val => this._onForehandChanged(FOREHAND.RIGHT)}
            />

            <View style={styles.emptyContainer} />

            <TennisCheckBox
              label="Left"
              checked={this.state.forehand === FOREHAND.LEFT}
              onChange={val => this._onForehandChanged(FOREHAND.LEFT)}
            />
          </View>
          <Text style={styles.header}>Backhand</Text>

          <View style={styles.checkboxContainer}>
            <TennisCheckBox
              label="Two Handed"
              checked={this.state.backhand === BACKHAND.TWOHANDED}
              onChange={val => this._onBackhandChanged(BACKHAND.TWOHANDED)}
            />

            <View style={styles.emptyContainer} />

            <TennisCheckBox
              label="One Handed"
              checked={this.state.backhand === BACKHAND.ONEHANDED}
              onChange={val => this._onBackhandChanged(BACKHAND.ONEHANDED)}
            />
          </View>

          <TouchableOpacity
            style={styles.btnJoinNow}
            onPress={this._onSignupPressed}
          >
            <Text style={styles.btnJoinNowText}>Join Now</Text>
          </TouchableOpacity>

          <Text style={styles.btnTermsTextDescription}>
            By tapping "Join Now" you agree to the
          </Text>

          <TouchableOpacity style={styles.btnTerms}>
            <Text style={styles.btnTermsText}>'Terms & Conditions'</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#DFDFDF",
    width: "85%"
  },
  mainHeader: {
    fontSize: 22,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontHeavy,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5
  },
  header: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  textInput: {
    height: 50,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 10
  },
  textInputPW: {
    height: 50,
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)"
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    alignSelf: "center",
    marginBottom: 10
  },
  btnEye: {
    flex: 1
  },
  textInputPasswordView: {
    flex: 10,
    justifyContent: "center"
  },
  btnJoinNow: {
    alignSelf: "center",
    backgroundColor: globalStyles.primaryColor,
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15
  },
  btnJoinNowText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 19,
    fontFamily: globalStyles.mainFontBook
  },
  checkboxContainer: {
    flexDirection: "row",
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  lastCheckboxContainer: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10
  },
  emptyContainer: {
    flex: 0.5
  },
  btnTerms: {
    alignSelf: "center"
  },
  btnTermsTextDescription: {
    textAlign: "center",
    fontFamily: globalStyles.mainFontBook,
    fontSize: 12,
    fontWeight: "normal"
  },
  btnTermsText: {
    fontSize: 12,
    fontWeight: "normal",
    color: "green",
    fontFamily: globalStyles.mainFontBook,
    textAlign: "center",
    marginBottom: 15
  }
});
