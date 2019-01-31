'use strict';

import React, { Component } from 'react'
import {
    Button,
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import globalStyles from "../../globalStyles";
import LadderList from "./LadderList";
// might use modal later for "Are you sure you would like to challenge Jake?"
// import Modal from "react-native-modal";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class AvailableChallenge extends React.Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: "Available Challenge",
        };
    };

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => item.id;
    
    _fetchAllAvailableChallenges = () => {
        let availableChallengesList = [
            {id: 4, name: "Ross Nunez", icon: "something.jpg", challenged: false},
            {id: 5, name: "Victor Reed", icon: "something.jpg", challenged: false},
            {id: 6, name: "Jake Douglas", icon: "something.jpg", challenged: true},
            {id: 7, name: "Mattie Munoz", icon: "something.jpg", challenged: false}
        ];
        return availableChallengesList;
    };

    _clickChallengeOpponent = (item) => {
        console.log("clicked on challenge button: " + item.name);
    };

    _clickChallengedOpponent = (item) => {
        console.log("clicked on challenged button: " + item.name);
    };

    _buildAvailableChallengeList = () => {
        let availableChallengeList = this._fetchAllAvailableChallenges();
        
        /*
            Case 1: Show only one ladder available challenge
                for ex. just ladder A
            Case 2: Show all the ladders available challenge
                for ex. ladder A,B,C
        
        */
        
        return (<LadderList ladderName="Ladder A" availableList={availableChallengeList}
                    onClickChallengedOpponent={this._clickChallengedOpponent} onClickChallengeOpponent={this._clickChallengeOpponent}/>);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    {this._buildAvailableChallengeList()}
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
