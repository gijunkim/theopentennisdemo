'use strict';

import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import globalStyles from "../../globalStyles";
import PendingList from "./PendingList";
// might use modal later for "Are you sure you would like to accept or decline Jake?"
// import Modal from "react-native-modal";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class PendingRequest extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: "Pending Request",
        };
    };

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => item.id;
    
    _fetchAllPendingRequest = () => {
        let pendingRequestList = [
            {id: 4, name: "Ross Nunez", icon: "something.jpg", daysLeftToReply: 3},
            {id: 5, name: "Victor Reed", icon: "something.jpg", daysLeftToReply: 3},
            {id: 6, name: "Jake Douglas", icon: "something.jpg", daysLeftToReply: 3},
            {id: 7, name: "Mattie Munoz", icon: "something.jpg", daysLeftToReply: 3}
        ];
        return pendingRequestList;
    };

    _clickDeclineRequest = (item) => {
        console.log("clicked on decline button: " + item.name);
    };

    _clickAcceptRequest = (item) => {
        console.log("clicked on accept button: " + item.name);
    };

    _buildPendingRequestList = () => {
        let pendingRequestList = this._fetchAllPendingRequest();
        
        /*
            Case 1: Show only one ladder pending request
                for ex. just ladder A
            Case 2: Show all the ladders pending request
                for ex. ladder A,B,C
        
        */
        
        return (<PendingList ladderName="Ladder A" pendingRequestList={pendingRequestList}
                    onClickAccept={this._clickAcceptRequest} onClickDecline={this._clickDeclineRequest}/>);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    {this._buildPendingRequestList()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.whiteColor
    }
});
