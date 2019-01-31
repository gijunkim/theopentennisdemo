"use strict";

import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Icon } from "native-base";
import TwoIconButtonsRight from "../../components/twoIconButtonsRight";
import globalStyles from "../../globalStyles";

export default class LadderNews extends React.Component {
  static navigationOptions = {
    title: "Ladder News",
    headerLeft: <View />,
    headerRight: <TwoIconButtonsRight />,
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      color: globalStyles.headerColor,
      fontWeight: "normal",
      fontFamily: globalStyles.mainFontMedium,
      alignSelf: "center",
      textAlign: "center"
    },

    headerStyle: {
      backgroundColor: globalStyles.backgroundColor
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _openFindLadderPage = () => {
    this.props.navigation.navigate("FindLadder");
  };

  _openCreateLadderPage = () => {
    this.props.navigation.navigate("GeneralRulePage");
  };

  render() {
    // If User Ladder Data = NONE:
    return (
      <View style={styles.container}>
        <Text style={styles.header}>You have not joined any ladders yet!</Text>

        <TouchableOpacity
          style={styles.findButton}
          onPress={this._openFindLadderPage}
        >
          <View style={styles.buttonContainer}>
            <Icon name="md-search" />
            <Text style={styles.buttonText}>Find Ladder</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.emptyContainer} />

        <TouchableOpacity
          style={styles.createButton}
          onPress={this._openCreateLadderPage}
        >
          <View style={styles.buttonContainer}>
            <Icon name="md-create" />
            <Text style={styles.buttonText}>Create Ladder</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: globalStyles.backgroundColor
  },
  emptyContainer: {
    marginVertical: 15
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginBottom: "5%"
  },
  findButton: {
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: globalStyles.headerColor,
    alignSelf: "center",
    paddingHorizontal: "10%"
  },
  createButton: {
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: globalStyles.headerColor,
    alignSelf: "center",
    paddingHorizontal: "8.5%"
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: globalStyles.headerColor,
    fontSize: 14,
    fontFamily: globalStyles.mainFontBook,
    paddingLeft: 5
  }
});
