"use strict";

import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import NumberPicker from "../../../components/NumberPicker";

import globalStyles from "../../../globalStyles";
const { width: WIDTH } = Dimensions.get("window");

export default class DefenderRulePage extends React.Component {
  static navigationOptions = {
    title: "Create Ladder",
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
      respond_window: 0,
      allowance: 0,
      set_allowance_1: 0,
      set_allowance_1a: 0,
      set_allowance_2: 0,
      set_allowance_3: 0,
      set_allowance_4: 0,
      set_allowance_4a: 0
    };
  }

  _onClickMinus_respond_window = () => {
    this.state.respond_window === 0
      ? 0
      : this.setState({ respond_window: this.state.respond_window - 1 });
  };

  _onClickPlus_respond_window = () => {
    this.setState({ respond_window: this.state.respond_window + 1 });
  };

  _onClickMinus_allowance = () => {
    this.state.allowance === 0
      ? 0
      : this.setState({ allowance: this.state.allowance - 1 });
  };
  _onClickPlus_allowance = () => {
    this.setState({ allowance: this.state.allowance + 1 });
  };

  _onClickMinus_set_allowance_1 = () => {
    this.state.set_allowance_1 === 0
      ? 0
      : this.setState({ set_allowance_1: this.state.set_allowance_1 - 1 });
  };

  _onClickPlus_set_allowance_1 = () => {
    this.setState({ set_allowance_1: this.state.set_allowance_1 + 1 });
  };

  _onClickMinus_set_allowance_1a = () => {
    this.state.set_allowance_1a === 0
      ? 0
      : this.setState({ set_allowance_1a: this.state.set_allowance_1a - 1 });
  };

  _onClickPlus_set_allowance_1a = () => {
    this.setState({ set_allowance_1: this.state.set_allowance_1 + 1 });
  };

  _onClickMinus_set_allowance_2 = () => {
    this.state.set_allowance_2 === 0
      ? 0
      : this.setState({ set_allowance_2: this.state.set_allowance_2 - 1 });
  };

  _onClickPlus_set_allowance_2 = () => {
    this.setState({ set_allowance_2: this.state.set_allowance_2 + 1 });
  };

  _onClickMinus_set_allowance_3 = () => {
    this.state.set_allowance_3 === 0
      ? 0
      : this.setState({ set_allowance_3: this.state.set_allowance_3 - 1 });
  };

  _onClickPlus_set_allowance_3 = () => {
    this.setState({ set_allowance_3: this.state.set_allowance_3 + 1 });
  };

  _onClickMinus_set_allowance_4 = () => {
    this.state.set_allowance_4 === 0
      ? 0
      : this.setState({ set_allowance_4: this.state.set_allowance_4 - 1 });
  };

  _onClickPlus_set_allowance_4 = () => {
    this.setState({ set_allowance_4: this.state.set_allowance_4 + 1 });
  };

  _onClickMinus_set_allowance_4a = () => {
    this.state.set_allowance_4a === 0
      ? 0
      : this.setState({ set_allowance_4a: this.state.set_allowance_4a - 1 });
  };

  _onClickPlus_set_allowance_4a = () => {
    this.setState({ set_allowance_4a: this.state.set_allowance_4a + 1 });
  };

  _onPressSave = () => {
    console.log(this.state);
    this.props.navigation.navigate("PlayReportRulePage");
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
          <View>
            <View style={styles.line}>
              <Text style={styles.header}>Allowance</Text>
              <View style={styles.sameRow}>
                <Text style={styles.headerDescription}>
                  Set season allowance
                </Text>
                <View style={styles.numberPicker}>
                  <NumberPicker
                    whichState={this.state.allowance}
                    onClickMinus={this._onClickMinus_allowance}
                    onClickPlus={this._onClickPlus_allowance}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.line}>
            <View>
              <Text style={styles.header}>Allowance Deduction</Text>

              <View>
                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Case 1: Not response within the response window
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_1}
                    onClickMinus={this._onClickMinus_set_allowance_1}
                    onClickPlus={this._onClickPlus_set_allowance_1}
                  />
                </View>

                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Set respond window:
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_1a}
                    onClickMinus={this._onClickMinus_set_allowance_1a}
                    onClickPlus={this._onClickPlus_set_allowance_1a}
                  />
                </View>

                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Case 2: Responded but not accepted
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_2}
                    onClickMinus={this._onClickMinus_set_allowance_2}
                    onClickPlus={this._onClickPlus_set_allowance_2}
                  />
                </View>

                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Case 3: Accept but not play
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_3}
                    onClickMinus={this._onClickMinus_set_allowance_3}
                    onClickPlus={this._onClickPlus_set_allowance_3}
                  />
                </View>

                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Case 4: Played but not reported
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_4}
                    onClickMinus={this._onClickMinus_set_allowance_4}
                    onClickPlus={this._onClickPlus_set_allowance_4}
                  />
                </View>

                <View style={styles.sameRow}>
                  <Text style={styles.headerDescription}>
                    Set report window:
                  </Text>
                  <NumberPicker
                    whichState={this.state.set_allowance_4a}
                    onClickMinus={this._onClickMinus_set_allowance_4a}
                    onClickPlus={this._onClickPlus_set_allowance_4a}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this._onPressSave}
          >
            <Text style={styles.submitBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    backgroundColor: globalStyles.backgroundColor
  },
  sameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25
  },
  header: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontMedium,
    marginTop: 10,
    marginBottom: 10
  },
  headerDescription: {
    flex: 1,
    fontSize: 15,
    color: globalStyles.headerDescriptionColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  line: {
    borderBottomColor: globalStyles.lineSeparatorColor,
    borderBottomWidth: globalStyles.lineSeparatorWidth
  },
  submitBtn: {
    alignSelf: "center",
    backgroundColor: globalStyles.primaryColor,
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15
  },
  submitBtnText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 19,
    fontFamily: globalStyles.mainFontBook
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10
  }
});
