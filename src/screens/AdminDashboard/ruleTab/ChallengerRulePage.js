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

import RadioGroup from "react-native-radio-buttons-group";

import globalStyles from "../../../globalStyles";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class ChallengerRulePage extends React.Component {
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

    let radioOptions = [
      {
        label: "Yes",
        value: true,
        selected: true
      },
      {
        label: "No",
        value: false,
        selected: false
      }
    ];

    this.state = {
      ranksAboveAllowed: 0,
      ranksBelowAllowed: 0,
      backToback: radioOptions,
      backTobackDaysAllowed: 0,
      pendingMatchAllowed: 0
    };
  }

  _onPressSave = () => {
    console.log(this.state);
    this.props.navigation.navigate("DefenderRulePage");
  };

  // for the radio button
  _onPressBacktoBack = data => {
    this.setState({ backToback: data });
  };

  _onClickMinus_ranksAboveAllowed = () => {
    this.state.ranksAboveAllowed === 0
      ? 0
      : this.setState({ ranksAboveAllowed: this.state.ranksAboveAllowed - 1 });
  };

  _onClickPlus_ranksAboveAllowed = () => {
    this.setState({ ranksAboveAllowed: this.state.ranksAboveAllowed + 1 });
  };

  _onClickMinus_ranksBelowAllowed = () => {
    this.state.ranksBelowAllowed === 0
      ? 0
      : this.setState({ ranksBelowAllowed: this.state.ranksBelowAllowed - 1 });
  };

  _onClickPlus_ranksBelowAllowed = () => {
    this.setState({ ranksBelowAllowed: this.state.ranksBelowAllowed + 1 });
  };

  _onClickMinus_backTobackDaysAllowed = () => {
    this.state.backTobackDaysAllowed === 0
      ? 0
      : this.setState({
          backTobackDaysAllowed: this.state.backTobackDaysAllowed - 1
        });
  };

  _onClickPlus_backTobackDaysAllowed = () => {
    this.setState({
      backTobackDaysAllowed: this.state.backTobackDaysAllowed + 1
    });
  };

  _onClickMinus_pendingMatchAllowed = () => {
    this.state.pendingMatchAllowed === 0
      ? 0
      : this.setState({
          pendingMatchAllowed: this.state.pendingMatchAllowed - 1
        });
  };

  _onClickPlus_pendingMatchAllowed = () => {
    this.setState({ pendingMatchAllowed: this.state.pendingMatchAllowed + 1 });
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
          <Text style={styles.header}>Limit by Ranks</Text>

          <View style={styles.line}>
            <View style={styles.sameRow}>
              <Text style={styles.question}>
                How many ranks above a challenger can challenge?
              </Text>

              <NumberPicker
                whichState={this.state.ranksAboveAllowed}
                onClickMinus={this._onClickMinus_ranksAboveAllowed}
                onClickPlus={this._onClickPlus_ranksAboveAllowed}
              />
            </View>

            <View style={styles.sameRow}>
              <Text style={styles.question}>
                How many ranks below a challenger can challenge?
              </Text>
              <NumberPicker
                whichState={this.state.ranksBelowAllowed}
                onClickMinus={this._onClickMinus_ranksBelowAllowed}
                onClickPlus={this._onClickPlus_ranksBelowAllowed}
              />
            </View>
          </View>

          <View style={styles.marginLeftContainer}>
            <Text style={styles.header}>Limit by Continuity</Text>
            <View style={styles.line}>
              <View>
                <Text style={styles.question}>
                  Is back-to-back challenge allowed?
                </Text>
                <RadioGroup
                  radioButtons={this.state.backToback}
                  onPress={this._onPressBacktoBack}
                  flexDirection="row"
                />
              </View>

              <View>
                <View style={styles.sameRow}>
                  <Text style={styles.question}>
                    After how many days is back-to-back challenge allowed?
                  </Text>
                  <NumberPicker
                    whichState={this.state.backTobackDaysAllowed}
                    onClickMinus={this._onClickMinus_backTobackDaysAllowed}
                    onClickPlus={this._onClickPlus_backTobackDaysAllowed}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.header}>Limit by Number</Text>
              <View style={styles.line}>
                <View>
                  <View style={styles.sameRow}>
                    <Text style={styles.question}>
                      How many pending matches are allowed on each players?
                    </Text>
                    <NumberPicker
                      whichState={this.state.pendingMatchAllowed}
                      onClickMinus={this._onClickMinus_pendingMatchAllowed}
                      onClickPlus={this._onClickPlus_pendingMatchAllowed}
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
  header: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontMedium,
    marginTop: 10,
    marginBottom: 10
  },
  question: {
    flex: 1,
    fontSize: 15,
    color: globalStyles.headerDescriptionColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  sameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25
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
