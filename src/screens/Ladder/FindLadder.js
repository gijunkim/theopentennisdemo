"use strict";

import React from "react";
import globalStyles from "../../globalStyles";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

export default class FindLadder extends React.Component {
  static navigationOptions = {
    title: "Find Ladder",
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
            Unfortunately, you can only join ladders by receiving invites from
            others at this moment.
          </Text>

          <Text style={styles.header}>
            Currently, you have 0 membership invite
          </Text>
          <View style={{ flex: 1 }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: globalStyles.backgroundColor,
    width: "85%"
  },
  header: {
    fontSize: 16,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    marginTop: "4%"
  }
});
