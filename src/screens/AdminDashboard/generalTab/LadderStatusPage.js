"use strict";

import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import RadioGroup from "react-native-radio-buttons-group";
import DatePicker from "react-native-datepicker";

import globalStyles from "../../../globalStyles";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class LadderStatusPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.header,
      headerRight: <View />,
      headerStyle: {
        backgroundColor: "#DFDFDF"
      },
      headerTitleStyle: {
        flex: 1,
        fontSize: 20,
        color: "#535353",
        fontWeight: "normal",
        fontFamily: "AvenirLTStd-Medium",
        alignSelf: "center",
        textAlign: "center"
      }
    };
  };

  constructor(props) {
    super(props);

    const change_status_choices = [
      {
        label: "Start Season",
        value: "START_SEASON"
      },
      {
        label: "Stop Season",
        value: "STOP_SEASON"
      }
    ];

    const notice_option_choices = [
      {
        label: "News",
        value: "NEWS"
      },
      {
        label: "Email",
        value: "EMAIL"
      },
      {
        label: "Text Message",
        value: "TEXT_MESSAGE"
      }
    ];

    this.state = {
      ladder_status: change_status_choices,
      new_ladder_start_date: "",
      new_ladder_end_date: "",
      notice_option: notice_option_choices
    };
  }

  _onChange_changeStatus = data => {
    this.setState({ ladder_status: data });
  };

  _onChange_noticeOption = data => {
    this.setState({ notice_option: data });
  };

  _onSubmit = () => {
    console.log("submit data: " + this.state);
    return this.state;
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
            <Text style={styles.header}>Change Status</Text>
            <RadioGroup
              radioButtons={this.state.ladder_status}
              onPress={this._onChange_changeStatus}
              flexDirection="row"
            />
          </View>

          <View style={styles.line} />

          <View>
            <Text style={styles.header}>Ladder Season</Text>

            <View style={styles.datePickerGroup}>
              <Text>Starts</Text>
              <View style={styles.datePickerContainer}>
                <DatePicker
                  style={{ width: 200 }}
                  date={this.state.new_ladder_start_date}
                  mode="date"
                  placeholder="select date"
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
                    this.setState({ new_ladder_start_date: date });
                  }}
                />
              </View>
            </View>

            <View style={styles.datePickerGroup}>
              <Text>Ends</Text>
              <View style={styles.datePickerContainer}>
                <DatePicker
                  style={{ width: 200 }}
                  date={this.state.new_ladder_end_date}
                  mode="date"
                  placeholder="select date"
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
                    this.setState({ new_ladder_end_date: date });
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.line} />

          <View>
            <Text style={styles.header}>Notice Option</Text>
            <RadioGroup
              radioButtons={this.state.notice_option}
              onPress={this._onChange_noticeOption}
              flexDirection="row"
            />
          </View>

          <View style={styles.line} />
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => this._onSubmit()}
          >
            <Text style={styles.submitBtnText}>Send Notice</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  header: {
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    marginTop: 10,
    marginBottom: 10
  },
  datePickerGroup: {
    flexDirection: "row"
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
    backgroundColor: "#575757",
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
    fontFamily: "AvenirLTStd-Book"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 0
  }
});
