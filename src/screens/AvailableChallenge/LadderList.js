'use strict';

import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { ListItem } from 'react-native-elements'
import globalStyles from "../../globalStyles";

export default class LadderList extends React.Component {
    constructor(props){
      super(props)
    }

    _renderActionButton = ({ item }) => {
        let buttonObject = {};

        if (item.challenged) {
            // i think the title name can changed to "requested" or "challenged"
            buttonObject = {
                action: this.props.onClickChallengedOpponent,
                style: styles.challengedBtn,
                title: "Challenge" 
            };
        } else {
            buttonObject = {
                action: this.props.onClickChallengeOpponent,
                style: styles.challengeBtn,
                title: "Challenge"
            };
        }
        return (
            <ListItem
                containerStyle={styles.listItem}
                title={item.name}
                titleStyle={styles.listItemTitle}
                rightElement={
                    <View>
                        <TouchableOpacity style={buttonObject.style} onPress={() => buttonObject.action(item)}>
                            <Text style={styles.rightBtnText}>{buttonObject.title}</Text>
                        </TouchableOpacity>
                    </View>
                 }
            />
        )
    };
  
    render() {
      return (
        <View>
            <View>
                <Text style={styles.ladderTitle}>{this.props.ladderName}</Text>
                <FlatList
                    data={this.props.availableList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderActionButton}
                />
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    ladderTitle: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    rightBtnText: {
        color: "#ffffff",
    },
    challengeBtn : {
        backgroundColor: globalStyles.tennisGreen,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    challengedBtn: {
        backgroundColor: globalStyles.buttonDisabledColor,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    listItem: {
        backgroundColor: globalStyles.listItemBackgroundColor,
        marginTop: globalStyles.listItemMarginTopBottom,
        marginBottom: globalStyles.listItemMarginTopBottom,
        marginLeft: globalStyles.listItemMarginLeftRight,
        marginRight: globalStyles.listItemMarginLeftRight,
        borderColor: globalStyles.listItemBorderColor,
        borderWidth: globalStyles.listItemBorderWidth,
        borderRadius: globalStyles.listItemBorderRadius
    },
    listItemTitle: {
        color: globalStyles.listItemTitleColor,
        fontFamily: globalStyles.fontType
    }
});