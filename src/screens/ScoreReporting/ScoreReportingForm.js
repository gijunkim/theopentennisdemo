"use strict";

import React, { Component } from "react";

import globalStyles from "../../globalStyles";
import CheckBox from "react-native-checkbox-heaven";
import { Dropdown } from "react-native-material-dropdown";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class ScoreReporting extends React.Component {
  static navigationOptions = {
    title: "Score Reporting",
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
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      checkedCompleted: false,
      checkedForfeit: false,
      checkedNoShow: false,
      checkedName1: false,
      checkedName2: false,
      checked3Sets: false,
      checked1Set: false
    };
  }

  handleOnCompletedChanged(val) {
    this.setState({ checkedCompleted: true });
    this.setState({ checkedForfeit: false });
    this.setState({ checkedNoShow: false });
  }
  handleOnForfeitChanged(val) {
    this.setState({ checkedCompleted: false });
    this.setState({ checkedForfeit: true });
    this.setState({ checkedNoShow: false });
  }
  handleOnNoShowChanged(val) {
    this.setState({ checkedCompleted: false });
    this.setState({ checkedForfeit: false });
    this.setState({ checkedNoShow: true });
  }

  handleOnName1Changed(val) {
    this.setState({ checkedName1: true });
    this.setState({ checkedName2: false });
  }
  handleOnName2Changed(val) {
    this.setState({ checkedName1: false });
    this.setState({ checkedName2: true });
  }

  handleOn3SetsChanged(val) {
    this.setState({ checked3Sets: true });
    this.setState({ checked1Set: false });
  }
  handleOn1SetChanged(val) {
    this.setState({ checked3Sets: false });
    this.setState({ checked1Set: true });
  }

  render() {
    let data = [
      {
        value: "0"
      },
      {
        value: "1"
      },
      {
        value: "2"
      },
      {
        value: "3"
      },
      {
        value: "4"
      },
      {
        value: "5"
      },
      {
        value: "6"
      }
    ];

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
            <Text style={styles.firstHeader}>Match Status</Text>

            <View style={styles.lastCheckboxContainer}>
              <CheckBox
                style={styles.cboxLeft}
                label="Completed"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedCompleted}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnCompletedChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="Forfeit"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedForfeit}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnForfeitChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="No-show"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedNoShow}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnNoShowChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />
            </View>

            <Text style={styles.header}>Winner</Text>

            <View style={styles.lastCheckboxContainer}>
              <CheckBox
                style={styles.cboxLeft}
                label="Name 1"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedName1}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnName1Changed.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="Name 2"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checkedName2}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOnName2Changed.bind(this)}
                disabled={false}
                disabledColor="red"
              />
            </View>

            <Text style={styles.header}>How many sets did you play?</Text>

            <View style={styles.lastCheckboxContainer}>
              <CheckBox
                style={styles.cboxLeft}
                label="3 Sets"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checked3Sets}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOn3SetsChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />

              <View style={styles.emptyContainer} />

              <CheckBox
                style={styles.cboxRight}
                label="1 Set"
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName="matCircleMix"
                checked={this.state.checked1Set}
                checkedColor="#404040"
                uncheckedColor="#BABABA"
                onChange={this.handleOn1SetChanged.bind(this)}
                disabled={false}
                disabledColor="red"
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1
                }}
              >
                <Text style={styles.headerName}>Name 1</Text>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 1" data={data} style={styles.dropDown} />
                </View>
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 2" data={data} style={styles.dropDown} />
                </View>
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 3" data={data} style={styles.dropDown} />
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 120
              }}
            >
              <View
                style={{
                  flex: 1
                }}
              >
                <Text style={styles.headerName}>Name 2</Text>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 1" data={data} style={styles.dropDown} />
                </View>
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 2" data={data} style={styles.dropDown} />
                </View>
                <View style={{ width: "30%" }}>
                  <Dropdown label="Set 3" data={data} style={styles.dropDown} />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.btnNext}>
              <Text style={styles.btnNextText}>Confirm</Text>
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
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Medium",
    marginTop: 15,
    marginBottom: 5
  },
  header: {
    fontSize: 16,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Medium",
    marginTop: "4%"
  },
  headerName: {
    fontSize: 16,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Medium",
    marginTop: "20%"
  },
  labelStyle: {
    fontSize: 14,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    paddingLeft: "2%"
  },
  btnNext: {
    alignSelf: "center",
    backgroundColor: "#575757",
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center"
  },

  btnNextText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 19,
    fontFamily: "AvenirLTStd-Book"
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
