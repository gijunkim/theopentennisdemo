"use strict";

import React, { Component } from "react";
import { Dimensions, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

// rule menu page & general menu page are tabs
import RuleMenuPage from "./ruleTab/RuleMenuPage";
import GeneralMenuPage from "./generalTab/GeneralMenuPage";
import globalStyles from "../../globalStyles";

export default class AdminDashboard extends Component<Props> {
  static navigationOptions = {
    title: "Admin Dashboard",
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

  state = {
    index: 0,
    routes: [
      { key: "rule", title: "Rule" },
      { key: "general", title: "General" }
    ]
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "rule":
        return <RuleMenuPage navigation={this.props.navigation} />;
      case "general":
        return <GeneralMenuPage navigation={this.props.navigation} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: Dimensions.get("window").width,
          height: 0
        }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: globalStyles.buttonColor
            }}
            style={{ backgroundColor: "transparent" }}
            labelStyle={{
              fontSize: 18,
              fontWeight: "normal",
              fontFamily: globalStyles.mainFontMedium,
              color: globalStyles.headerColor
            }}
            getLabelText={({ route }) => route.title}
          />
        )}
      />
    );
  }
}
