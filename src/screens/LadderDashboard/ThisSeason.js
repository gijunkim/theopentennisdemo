"use strict";

import React, { Component } from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";

export default class ThisSeason extends Component<Props> {
  _keyExtractor = index => index.toString();

  _renderItem = ({ item, index }) => {
    return (
      <ListItem item={item} index={index} onPressItem={this._onPressItem} />
    );
  };

  _onPressItem = item => {
    let id = item.id;

    console.log("pressed item id is: " + id);
    this.props.navigation.navigate(id, item);
  };

  _fetchData = () => {
    let listing = [
      { header: "General Rule", title: "Ranking", id: "GeneralRulePage" },
      {
        header: "Challenger Rule",
        title: "Admin Dashboard",
        id: "AdminDashboard"
      },
      {
        header: "Defender Rule",
        title: "Available Challenges",
        id: "DefenderRulePage"
      },
      {
        header: "Play & Report Rule",
        title: "Pending Requests",
        id: "PlayReportRulePage"
      },
      {
        header: "Defender Rule",
        title: "Pending Matches",
        id: "DefenderRulePage"
      },
      {
        header: "Play & Report Rule",
        title: "Score Reporting",
        id: "ScoreReportingForm"
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
