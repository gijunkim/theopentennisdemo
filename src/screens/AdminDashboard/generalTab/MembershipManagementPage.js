"use strict";

import React, { Component } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { ListItem } from "react-native-elements";
import Modal from "react-native-modal";

export default class MembershipManagementPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.header,
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
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: null,
      cancellingUserID: null
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

  _renderCancellationItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        rightElement={
          <View>
            <Button
              onPress={() => this._onClickCancelMembership(item.id)}
              title="Cancel"
              color="#02ce8a"
            />
          </View>
        }
      />
    );
  };

  _onClickAccept = userID => {
    console.log("accepted user: " + userID);
  };

  _onClickDecline = userID => {
    console.log("declined user: " + userID);
  };

  _onClickCancelMembership = userID => {
    console.log("cancelling user: " + userID);
    this.setState({
      cancellingUserID: userID,
      isModalVisible: "cancel"
    });
  };

  _confirmAccept = userID => {};

  _confirmDecline = userID => {};

  _confirmCancelMembership = () => {
    console.log("cancelling membership: " + this.state.cancellingUserID);
    this._toggleModal();
  };

  _fetchMemberApprovalData = () => {
    let memberApprovalList = [
      { id: 0, name: "Jake Douglas", icon: "something.jpg" },
      { id: 1, name: "Jake Lee", icon: "something.jpg" }
    ];
    return memberApprovalList;
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
      cancellingUserID: null
    });
  };

  render() {
    return (
      <View>
        <View>
          <Text>Membership Approval</Text>
          <FlatList
            data={this._fetchMemberApprovalData()}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderApprovalItem}
          />
        </View>

        <View>
          <Text>Membership Cancellation</Text>
          <FlatList
            data={this._fetchAllMembersData()}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderCancellationItem}
          />
        </View>

        <Modal isVisible={this.state.isModalVisible === "cancel"}>
          <View style={styles.modalContainer}>
            <Text>Are you sure?</Text>
            <View style={styles.rowContainer}>
              {this._renderModalActionButton("Yes", () =>
                this._confirmCancelMembership()
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
  textContainer: {
    width: 180,
    height: 180,
    marginRight: 10,
    backgroundColor: "#48BBEC"
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  title: {
    fontSize: 20,
    color: "#656565"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  }
});
