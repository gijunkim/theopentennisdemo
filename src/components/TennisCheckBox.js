'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox-heaven';


export default class TennisCheckBox extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        checked: PropTypes.bool,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <CheckBox
                style={styles.cbox}
                label={this.props.label}
                labelStyle={styles.labelStyle}
                iconSize={28}
                iconName='matCircleMix'
                checked={this.props.checked}
                checkedColor='#404040'
                uncheckedColor='#BABABA'
                onChange={val => this.props.onChange(val)}
                disabled={false}
                disabledColor='red'
            />
        );
    }
}


const styles = StyleSheet.create({
   labelStyle: {
        fontSize: 15,
        color: '#535353',
        fontWeight: 'normal',
        fontFamily: 'AvenirLTStd-Book',
        paddingLeft: '2%',
    },
    cbox: {
        flex: 1,
    },
});
