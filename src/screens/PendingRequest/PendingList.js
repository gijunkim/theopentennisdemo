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

export default class PendingList extends React.Component {
    /*
        ladderName
        pendingRequestList
        onClickAccept
        onClickDecline
    */

    constructor(props){
      super(props)
    }

    _renderActionButton = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.daysLeftToReply.toString() + "d left"} // only accepts string! not number!
                containerStyle={styles.listItem}
                titleStyle={styles.listItemTitle}
                subtitleStyle={styles.daysLeftStyle}
                rightElement={
                    <View style={styles.row}>
                        <View style={styles.spacing}>
                            <TouchableOpacity style={styles.acceptBtn} onPress={() => this.props.onClickAccept(item)}>
                                <Text style={styles.rightBtnText}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.declineBtn} onPress={() => this.props.onClickDecline(item)}>
                                <Text style={styles.rightBtnText}>Decline</Text>
                            </TouchableOpacity>
                        </View>
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
                    data={this.props.pendingRequestList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderActionButton}
                />
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    ladderTitle: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    rightBtnText: {
        color: "#ffffff",
    },
    spacing: {
        marginRight: globalStyles.listItemBtnSpacing
    },  
    acceptBtn : {
        backgroundColor: globalStyles.tennisGreen,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    declineBtn: {
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