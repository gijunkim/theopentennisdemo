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

export default class ScoreReportingList extends React.Component {
    /*
        required props:
            ladderName
            scoreReportingList
            onClickReport
            onClickEdit
    */

    constructor(props){
      super(props)
    }

    _renderActionButton = ({ item }) => {
        let buttonObject;

        if(item.reported) {
            buttonObject = {
                style: styles.editBtn,
                title: "Edit",
                action: this.props.onClickEdit
            };
        } else {
            buttonObject = {
                style: styles.reportBtn,
                title: "Report",
                action: this.props.onClickReport
            };
        }

        return (
            <ListItem
                title={item.name}
                subtitle={item.daysLeftToReply.toString() + "d left"} // only accepts string! not number!
                containerStyle={styles.listItem}
                titleStyle={styles.listItemTitle}
                subtitleStyle={styles.daysLeftStyle}
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
                    data={this.props.scoreReportingList}
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
    reportBtn: {
        backgroundColor: globalStyles.tennisGreen,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    editBtn: {
        backgroundColor: globalStyles.listItemDeclineBtnColor,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    daysLeftStyle: {
        color: globalStyles.listItemBorderColor,
        fontFamily: globalStyles.fontType,
        fontSize: 10
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