"use strict";

import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { ListItem } from "react-native-elements";
import Modal from "react-native-modal";
import globalStyles from "../../../globalStyles";

export default class AdminTransferPage extends React.Component {
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
        color: globalStyles.header,
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
      isModalVisible: null,
      transferringAdmin: null
    };
  }

  _keyExtractor = (item, index) => item.id;

  _renderApprovalItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        rightElement={
          <View style={styles.rowContainer}>
            <Button
              onPress={() => this._onClickAccept(item.id)}
              title="Accept"
              color="#02ce8a"
            />
            <Button
              onPress={() => this._onClickDecline(item.id)}
              title="Decline"
              color="#02ce8a"
            />
          </View>
        }
      />
    );
  };

  _renderTransferItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        rightElement={
          <View>
            <Button
              onPress={() => this._onClickTransferAdmin(item.id)}
              title="Transfer"
              color="#02ce8a"
            />
          </View>
        }
      />
    );
  };

  _onClickTransferAdmin = userID => {
    console.log("transferring admin: " + userID);
    this.setState({
      transferringAdmin: userID,
      isModalVisible: "transfer"
    });
  };

  _confirmTransferAdmin = () => {
    console.log("cancelling membership: " + this.state.transferringAdmin);
    this._toggleModal();
  };

  _fetchAllMembersData = () => {
    let allMembersList = [
      { id: 4, name: "Ross Nunez", icon: "something.jpg" },
      { id: 5, name: "Victor Reed", icon: "something.jpg" },
      { id: 6, name: "Jake Douglas", icon: "something.jpg" },
      { id: 7, name: "Mattie Munoz", icon: "something.jpg" }
    ];
    return allMembersList;
  };

  _renderModalActionButton = (text, onPress) => (
    <Button onPress={onPress} title={text} color="#02ce8a" />
  );

  _toggleModal = () => {
    this.setState({
      isModalVisible: null,
      transferringAdmin: null
    });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this._fetchAllMembersData()}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderTransferItem}
        />

        <Modal isVisible={this.state.isModalVisible === "transfer"}>
          <View style={styles.modalContainer}>
            <Text>Are you sure about the transfer?</Text>
            <View style={styles.rowContainer}>
              {this._renderModalActionButton("Yes", () =>
                this._confirmTransferAdmin()
              )}
              {this._renderModalActionButton("No", () => this._toggleModal())}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  }
});
