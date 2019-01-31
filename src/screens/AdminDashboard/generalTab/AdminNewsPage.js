"use strict";

import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import globalStyles from "../../../globalStyles";
const { width: WIDTH } = Dimensions.get("window");

export default class AdminNewsPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.header,
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
  };

  constructor(props) {
    super(props);
    this.state = {
      adminNewsText: ""
    };
  }

  onSubmitAdminNews = () => {
    console.log("New ladder new content: " + this.state.adminNewsText);
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
          <Text style={styles.header}>Admin News</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Write News that you wish to share to the members of your ladder"
            multiline={true}
            numberOfLines={10}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity
            style={styles.btnNext}
            onPress={this._onSignupPressed}
          >
            <Text style={styles.btnNextText}>Submit</Text>
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
    fontFamily: globalStyles.mainFontBook,
    marginTop: 10,
    marginBottom: 10
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 0
  }
});
