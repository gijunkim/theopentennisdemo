'use strict';

import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import globalStyles from "../../globalStyles";
import ScoreReportingList from "./ScoreReportingList";
// might use modal later for "Are you sure you would like to report or edit Jake?"
// import Modal from "react-native-modal";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class ScoreReporting extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: "Score Reporting",
        };
    };

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => item.id;
    
    _fetchScoreReportingList = () => {
        let pendingRequestList = [
            {id: 4, name: "Ross Nunez", icon: "something.jpg", daysLeftToReply: 3, reported: false},
            {id: 5, name: "Victor Reed", icon: "something.jpg", daysLeftToReply: 3, reported: false},
            {id: 6, name: "Jake Douglas", icon: "something.jpg", daysLeftToReply: 3, reported: false},
            {id: 7, name: "Mattie Munoz", icon: "something.jpg", daysLeftToReply: 3, reported: true}
        ];
        return pendingRequestList;
    };

    _clickReport = (item) => {
        console.log("clicked on report button: " + item.name);
    };

    _clickEdit = (item) => {
        console.log("clicked on edit button: " + item.name);
    };

    _buildScoreReportingList = () => {
        let scoreReportingList = this._fetchScoreReportingList();
        
        /*
            Case 1: Show only one ladder score reporting
                for ex. just ladder A
            Case 2: Show all the ladders score reporting
                for ex. ladder A,B,C
        
        */
        
        return (<ScoreReportingList ladderName="Ladder A" scoreReportingList={scoreReportingList} 
                    onClickReport={this._clickReport} onClickEdit={this._clickEdit} />);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    {this._buildScoreReportingList()}
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
