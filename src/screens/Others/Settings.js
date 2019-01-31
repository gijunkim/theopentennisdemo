"use strict";

import React from "react";
import CheckBox from "react-native-checkbox-heaven";

import globalStyles from "../../globalStyles";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default class Settings extends React.Component {
  static navigationOptions = {
    title: "Settings",
    headerRight: <View />,
    headerStyle: {
      backgroundColor: globalStyles.backgroundColor
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      color: globalStyles.headerColor,
      fontWeight: "normal",
      fontFamily: globalStyles.mainFontMedium,
      alignSelf: "center",
      textAlign: "center"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      date: "",
      checkedPush: true,
      checkedEmail: false,
      checkedNone: false
    };
  }

  handleOnPushChanged(val) {
    this.setState({ checkedPush: true });
    this.setState({ checkedEmail: false });
    this.setState({ checkedNone: false });
  }
  handleOnEmailChanged(val) {
    this.setState({ checkedPush: false });
    this.setState({ checkedEmail: true });
    this.setState({ checkedNone: false });
  }
  handleOnNoneChanged(val) {
    this.setState({ checkedPush: false });
    this.setState({ checkedEmail: false });
    this.setState({ checkedNone: true });
  }

  _openSupportPage = () => {
    this.props.navigation.navigate("Support");
  };

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
          <View style={styles.labelContainer}>
            <Text style={styles.firstHeader}>Notifications</Text>

            <View style={styles.lastCheckboxContainer}>
              <CheckBox
                style={styles.cboxLeft}
                label="Push"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedPush}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnPushChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="Email"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedEmail}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnEmailChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="None"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedNone}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnNoneChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />
            </View>

            <Text style={styles.header}>Support</Text>

            <View style={styles.buttonContainer}>
              <Text style={styles.headerDescription}>
                Ask any questions to The Open Tennis
              </Text>

              <TouchableOpacity
                style={styles.btnNext}
                onPress={this._openSupportPage}
              >
                <Text style={styles.btnNextText}>Next</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.header}>Policy</Text>

            <View style={styles.buttonContainer}>
              <Text style={styles.headerDescription}>Terms & Conditions</Text>

              <TouchableOpacity
                style={styles.btnNext}
                onPress={this._onSignupPressed}
              >
                <Text style={styles.btnNextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "4%",
    paddingBottom: "5%",
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor
  },
  firstHeader: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginTop: 15,
    marginBottom: 5
  },
  header: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginTop: "4%"
  },
  headerDescription: {
    fontSize: 13,
    color: globalStyles.headerDescriptionColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    alignSelf: "center"
  },
  labelStyle: {
    fontSize: 15,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    paddingLeft: "2%"
  },
  btnNext: {
    alignSelf: "center",
    backgroundColor: globalStyles.primaryColor,
    width: WIDTH - 310,
    height: 25,
    borderRadius: 25,
    justifyContent: "center"
  },

  btnNextText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 13,
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
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10
  },
  cboxLeft: {
    flex: 1
  },
  cboxRight: {
    flex: 1
  },
  emptyContainer: {
    flex: 0.5
  }
});
