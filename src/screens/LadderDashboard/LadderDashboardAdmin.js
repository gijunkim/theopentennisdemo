"use strict";

import React, { Component } from "react";
import { Dimensions, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

// rule menu page & general menu page are tabs
import ThisSeason from "./ThisSeason";
import GeneralMenuPage from "../AdminDashboard/generalTab/GeneralMenuPage";
import globalStyles from "../../globalStyles";
import TwoIconButtonsRight from "../../components/twoIconButtonsRight";

export default class LadderDashboardAdmin extends Component<Props> {
  static navigationOptions = {
    title: "Ladder A",
    headerLeft: <View />,
    headerRight: <TwoIconButtonsRight />,
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
      { key: "thisSeason", title: "This Season" },
      { key: "general", title: "Past Seasons" }
    ]
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "thisSeason":
        return <ThisSeason navigation={this.props.navigation} />;
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
