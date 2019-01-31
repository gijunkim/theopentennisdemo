'use strict';

import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import globalStyles from "../../globalStyles";
import PendingMatchList from "./PendingMatchList";
// might use modal later for "Are you sure you would like to accept or decline Jake?"
// import Modal from "react-native-modal";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class PendingMatch extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: "Pending Matches",
        };
    };

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => item.id;
    
    _fetchAllPendingMatch = () => {
        let pendingRequestList = [
            {id: 4, name: "Ross Nunez", icon: "something.jpg", daysLeftToReply: 3},
            {id: 5, name: "Victor Reed", icon: "something.jpg", daysLeftToReply: 3},
            {id: 6, name: "Jake Douglas", icon: "something.jpg", daysLeftToReply: 3},
            {id: 7, name: "Mattie Munoz", icon: "something.jpg", daysLeftToReply: 3}
        ];
        return pendingRequestList;
    };

    _clickWithdraw = (item) => {
        console.log("clicked on withdraw button: " + item.name);
    };

    _buildPendingMatchesList = () => {
        let pendingMatchList = this._fetchAllPendingMatch();
        
        /*
            Case 1: Show only one ladder pending matches
                for ex. just ladder A
            Case 2: Show all the ladders pending matches
                for ex. ladder A,B,C
        
        */
        
        return (<PendingMatchList ladderName="Ladder A" pendingMatchList={pendingMatchList} 
                    onClickWithdraw={this._clickWithdraw} />);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    {this._buildPendingMatchesList()}
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
