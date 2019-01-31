import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

import { Icon } from 'native-base'


export default class TwoIconButtonsLeft extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            <Icon name="md-search" onPress={() => alert('This is a button!')} style={{ paddingLeft: 15 }} />
            <Icon name="md-create" onPress={() => alert('This is a button!')} style={{ marginLeft: 25 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection: 'row'
    }

});