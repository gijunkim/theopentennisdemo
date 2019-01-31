"use strict";

import React, { Component } from "react";
import globalstyles from "../../globalStyles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class NumberPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whichState: this.props.whichState
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ whichState: nextProps.whichState });
  }

  render() {
    return (
      <View style={numberpickerStyles.numberPicker}>
        <TouchableOpacity
          style={[numberpickerStyles.btn, numberpickerStyles.minusBtn]}
          onPress={this.props.onClickMinus}
        >
          <Text style={numberpickerStyles.btnText}>-</Text>
        </TouchableOpacity>

        <Text style={numberpickerStyles.number}>{this.state.whichState}</Text>

        <TouchableOpacity
          style={[numberpickerStyles.btn, numberpickerStyles.plusBtn]}
          onPress={this.props.onClickPlus}
        >
          <Text style={numberpickerStyles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const numberpickerStyles = StyleSheet.create({
  numberPicker: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  plusBtn: {
    backgroundColor: globalstyles.buttonColor,
    alignItems: "center",
    marginLeft: 10
  },
  minusBtn: {
    backgroundColor: "#000",
    alignItems: "center",
    marginRight: 10
  },
  number: {
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    fontSize: 18,
    textAlign: "center",
    marginTop: 3
  },
  btn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: "center"
  },
  btnText: {
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book"
  }
});
