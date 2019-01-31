'use strict';

import React, { Component } from 'react'
import {
    FlatList,
    StyleSheet,
} from 'react-native';

import ListItem from '../../../components/ListItem';

export default class GeneralMenuPage extends React.Component {
    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                item={item}
                index={index}
                onPressItem={this._onPressItem}
            />
        );
    };

    _onPressItem = (item) => {
        let id = item.id;
        let title = item.title;

        console.log("Pressed item id: "+item.id);

        this.props.navigation.navigate(
            id, item);
    };

    _fetchData = () => {
        let listing = [
            {header: 'Membership Management', title: 'Membership Management', id: 'MembershipManagementPage'}, 
            {header: 'Admin Transfer', title: 'Admin Transfer', id: 'AdminTransferPage'}, 
            {header: 'Admin News', title: 'Admin News', id: 'AdminNewsPage'},
            {header: 'Ladder Status', title: 'Ladder Status', id: 'LadderStatusPage'},
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

const styles = StyleSheet.create({
    textContainer: {
        width: 180,
        height: 180,
        marginRight: 10,
        backgroundColor: '#48BBEC'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    title: {
        fontSize: 20,
        color: '#656565'
   },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
});

