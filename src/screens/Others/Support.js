"use strict";

import React from "react";

import globalStyles from "../../globalStyles";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default class Support extends React.Component {
  static navigationOptions = {
    title: "Support",
    headerRight: <View />,
    headerStyle: {
      backgroundColor: globalStyles.backgroundColor
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      color: globalStyles.header,
      fontWeight: "normal",
      fontFamily: globalStyles.mainFontMedium,
      alignSelf: "center",
      textAlign: "center"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
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
          <Text style={styles.header}>
            Ask any questions to The Open Tennis. We will get back to you real
            soon!
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter your message"
            multiline={true}
            numberOfLines={10}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity
            style={styles.btnNext}
            onPress={this._onSignupPressed}
          >
            <Text style={styles.btnNextText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: globalStyles.backgroundColor,
    width: "85%"
  },
  header: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    marginTop: "4%",
    alignSelf: "center",
    textAlign: "center"
  },
  btnNext: {
    alignSelf: "center",
    backgroundColor: globalStyles.primaryColor,
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 60
  },
  btnNextText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 19,
    fontFamily: globalStyles.mainFontBook
  },
  textInput: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 10
  }
});
