"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import globalStyles from "../../globalStyles";

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor={globalStyles.backgroundColor}
      >
        <View style={styles.rowContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: 180,
    height: 130,
    backgroundColor: globalStyles.buttonColor,
    borderRadius: 5,
    alignSelf: "center"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    alignSelf: "center"
  },
  separator: {
    height: 1,
    backgroundColor: globalStyles.backgroundColor
  },
  title: {
    fontSize: 23,
    color: "#FFF",
    fontFamily: "AvenirLTStd-Heavy",
    padding: 10
  }
});
