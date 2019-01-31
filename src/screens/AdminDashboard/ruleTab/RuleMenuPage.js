"use strict";

import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../../../components/ListItem";

export default class RuleMenuPage extends Component<Props> {
  _keyExtractor = index => index.toString();

  _renderItem = ({ item, index }) => {
    return (
      <ListItem item={item} index={index} onPressItem={this._onPressItem} />
    );
  };

  _onPressItem = item => {
    let id = item.id;
    let title = item.title;

    console.log("pressed item id is: " + id);
    this.props.navigation.navigate(id, item);
  };

  _fetchData = () => {
    let listing = [
      { header: "General Rule", title: "General Rule", id: "GeneralRulePage" },
      {
        header: "Challenger Rule",
        title: "Challenger Rule",
        id: "ChallengerRulePage"
      },
      {
        header: "Defender Rule",
        title: "Defender Rule",
        id: "DefenderRulePage"
      },
      {
        header: "Play & Report Rule",
        title: "Play & Report Rule",
        id: "PlayReportRulePage"
      }
    ];
    return listing;
  };

  render() {
    return (
      <FlatList
        data={this._fetchData()}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={2}
      />
    );
  }
}
