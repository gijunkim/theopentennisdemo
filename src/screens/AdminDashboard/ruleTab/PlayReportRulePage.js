"use strict";

import React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import RadioGroup from "react-native-radio-buttons-group";

import globalStyles from "../../../globalStyles";
const { width: WIDTH } = Dimensions.get("window");

export default class PlayReportRulePage extends React.Component {
  static navigationOptions = {
    title: "Create Ladder",
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
    const brings_ball_choices = [
      {
        label: "Defender",
        value: "DEFENDER"
      },
      {
        label: "Challenger",
        value: "CHALLENGER"
      }
    ];

    const default_court_choices = [
      {
        label: "Defender",
        value: "DEFENDER"
      },
      {
        label: "Challenger",
        value: "CHALLENGER"
      }
    ];

    const numSets_choices = [
      {
        label: "1 Set",
        value: "1"
      },
      {
        label: "3 Sets",
        value: "3"
      },
      {
        label: "Both",
        value: "both"
      }
    ];

    const yes_no_7_choices = [
      {
        label: "Yes",
        value: true
      },
      {
        label: "No",
        value: false
      }
    ];

    const yes_no_10_choices = [
      {
        label: "Yes",
        value: true
      },
      {
        label: "No",
        value: false
      }
    ];

    const ranking_change_choices = [
      {
        label: "Bump",
        value: "bump"
      },
      {
        label: "Swap",
        value: "swap"
      }
    ];

    this.state = {
      brings_ball: brings_ball_choices,
      default_court_play: default_court_choices,
      numSets: numSets_choices,
      allow_7: yes_no_7_choices,
      allow_10: yes_no_10_choices,
      ranking_change: ranking_change_choices
    };
  }

  _onPressSave = () => {
    console.log(this.state.brings_ball);
    console.log(this.state.default_court_play);
    console.log(this.state.numSets);
    console.log(this.state.allow_7);
    console.log(this.state.allow_10);
    console.log(this.state.ranking_change);

    this.props.navigation.navigate("LadderDashboardAdmin");
  };

  _onClick_bringsBall = data => {
    this.setState({ brings_ball: data });
  };

  _onClick_defaultCourt = data => {
    this.setState({ default_court_play: data });
  };
  _onClick_numSets = data => {
    this.setState({ numSets: data });
  };

  _onClick_allow7 = data => {
    this.setState({ allow_7: data });
  };

  _onClick_allow10 = data => {
    this.setState({ allow_10: data });
  };

  _onClick_rankingChange = data => {
    this.setState({ ranking_change: data });
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
            <Text style={styles.header}>Rule on Winning</Text>

            <View>
              <View style={styles.line}>
                <Text style={styles.question}># of Sets</Text>
                <RadioGroup
                  radioButtons={this.state.numSets}
                  onPress={this._onClick_numSets}
                  flexDirection="row"
                  style={styles.radioGroup}
                />

                <View>
                  <Text style={styles.question}>
                    Allow 7-point tie-break at 6-6 for each set?
                  </Text>
                  <RadioGroup
                    radioButtons={this.state.allow_7}
                    onPress={this._onClick_allow7}
                    flexDirection="row"
                    style={styles.radioGroup}
                  />
                </View>

                <View>
                  <Text style={styles.question}>
                    Allow 10-point super-tie-break in lieu of a set?
                  </Text>
                  <RadioGroup
                    radioButtons={this.state.allow_10}
                    onPress={this._onClick_allow10}
                    flexDirection="row"
                    style={styles.radioGroup}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.header}>Match Logistics</Text>

            <View>
              <View style={styles.line}>
                <Text style={styles.question}>Who brings the ball?</Text>
                <RadioGroup
                  radioButtons={this.state.brings_ball}
                  onPress={this._onClick_bringsBall}
                  flexDirection="row"
                  style={styles.radioGroup}
                />

                <View>
                  <Text style={styles.question}>
                    What is the default court to play?
                  </Text>
                  <RadioGroup
                    radioButtons={this.state.default_court_play}
                    onPress={this._onClick_defaultCourt}
                    flexDirection="row"
                    style={styles.radioGroup}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.header}>Ranking Change</Text>
              <View>
                <View style={styles.line}>
                  <Text style={styles.question}>
                    If challenger wins defender, how will rankings change?
                  </Text>
                  <RadioGroup
                    radioButtons={this.state.ranking_change}
                    onPress={this._onClick_rankingChange}
                    flexDirection="row"
                    style={styles.radioGroup}
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
    backgroundColor: globalStyles.backgroundColor,
    width: "85%"
  },
  header: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontMedium,
    marginTop: 10,
    marginBottom: 10
  },
  question: {
    fontSize: 15,
    color: globalStyles.headerDescriptionColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  radioGroup: {
    marginBottom: 10
  },
  datePickerContainer: {
    borderColor: globalStyles.lineSeparatorColor,
    borderWidth: globalStyles.lineSeparatorWidth,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "flex-end"
  },
  ladderNameInput: {
    marginBottom: 10
  },
  ladderSeasonHeader: {
    marginTop: 10
  },
  line: {
    borderBottomColor: globalStyles.lineSeparatorColor,
    borderBottomWidth: globalStyles.lineSeparatorWidth
  },
  marginLeft: {
    marginLeft: 15
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
