/*
    Cases:
        if Create new ladder
            everything field empty
        else Existing ladder 
            if general rule empty:
                everything field empty
            else 
                prepopulate necessary fields
                (ladder name, ladder start date, end date, ladder policy)

    Things you need
        1. Validator! (check if all inputs are valid, including if the start date comes before end date, and that end date is after today)
*/

"use strict";

import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import DatePicker from "react-native-datepicker";

import globalStyles from "../../../globalStyles";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class GeneralRulePage extends Component<Props> {
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
      ladderName: "",
      ladderPolicy: "",
      startDate: "",
      endDate: ""
    };
  }

  _onPressSave = () => {
    console.log(this.state);
    this.props.navigation.navigate("ChallengerRulePage");
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
          <Text style={styles.header}>Ladder Name</Text>
          <TextInput
            placeholder="Enter the Ladder Name"
            onChangeText={text => this.setState({ ladderName: text })}
            style={styles.ladderNameInput}
          />

          <Text style={styles.header}>Ladder Season</Text>
          <View style={styles.datePickerGroup}>
            <Text style={styles.ladderSeasonHeader}>Starts:</Text>
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.startDate}
                mode="date"
                placeholder="Select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 15
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderColor: "transparent"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ startDate: date });
                }}
              />
            </View>
          </View>

          <View style={styles.datePickerGroup}>
            <Text style={styles.ladderSeasonHeader}>Ends:</Text>
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.endDate}
                mode="date"
                placeholder="Select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 15
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderColor: "transparent"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ endDate: date });
                }}
              />
            </View>
          </View>

          <Text style={styles.header}>Ladder Policy</Text>
          <TextInput
            placeholder="Enter the Ladder Policy"
            onChangeText={text => this.setState({ ladderPolicy: text })}
            style={styles.ladderNameInput}
          />

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
    backgroundColor: globalStyles.backgroundColor,
    justifyContent: "center",
    width: "85%"
  },
  header: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontMedium,
    marginTop: 10
  },
  datePickerGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  datePickerContainer: {
    borderColor: globalStyles.lineSeparatorColor,
    borderWidth: globalStyles.lineSeparatorWidth,
    borderRadius: 20,
    marginBottom: 20
  },
  ladderNameInput: {
    height: 50,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 10
  },
  ladderSeasonHeader: {
    marginTop: 10,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  line: {
    justifyContent: "center",
    borderBottomColor: globalStyles.lineSeparatorColor,
    borderBottomWidth: globalStyles.lineSeparatorWidth,
    marginLeft: 10,
    marginRight: 10
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
