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

export default class PendingMatchList extends React.Component {
    /*
        ladderName
        pendingMatchList
        onClickWithdraw
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
                    <View>
                        <TouchableOpacity style={styles.withdrawBtn} onPress={() => this.props.onClickWithdraw(item)}>
                            <Text style={styles.rightBtnText}>Withdraw</Text>
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
                    data={this.props.pendingMatchList}
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
    withdrawBtn: {
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