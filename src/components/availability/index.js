import React, { Component } from "react";
import CheckBox from "react-native-checkbox-heaven";

import { StyleSheet, Image, View, Text } from "react-native";

export default class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSunM: false,
      checkedSunA: false,
      checkedSunE: false,

      checkedMonM: false,
      checkedMonA: false,
      checkedMonE: false,

      checkedTueM: false,
      checkedTueA: false,
      checkedTueE: false,

      checkedWedM: false,
      checkedWedA: false,
      checkedWedE: false,

      checkedThuM: false,
      checkedThuA: false,
      checkedThuE: false,

      checkedFriM: false,
      checkedFriA: false,
      checkedFriE: false,

      checkedSatM: false,
      checkedSatA: false,
      checkedSatE: false
    };
  }

  handleOnSunMChanged(val) {
    this.setState({ checkedSunM: val });
  }
  handleOnSunAChanged(val) {
    this.setState({ checkedSunA: val });
  }
  handleOnSunEChanged(val) {
    this.setState({ checkedSunE: val });
  }

  handleOnMonMChanged(val) {
    this.setState({ checkedMonM: val });
  }
  handleOnMonAChanged(val) {
    this.setState({ checkedMonA: val });
  }
  handleOnMonEChanged(val) {
    this.setState({ checkedMonE: val });
  }

  handleOnTueMChanged(val) {
    this.setState({ checkedTueM: val });
  }
  handleOnTueAChanged(val) {
    this.setState({ checkedTueA: val });
  }
  handleOnTueEChanged(val) {
    this.setState({ checkedTueE: val });
  }

  handleOnWedMChanged(val) {
    this.setState({ checkedWedM: val });
  }
  handleOnWedAChanged(val) {
    this.setState({ checkedWedA: val });
  }
  handleOnWedEChanged(val) {
    this.setState({ checkedWedE: val });
  }

  handleOnThuMChanged(val) {
    this.setState({ checkedThuM: val });
  }
  handleOnThuAChanged(val) {
    this.setState({ checkedThuA: val });
  }
  handleOnThuEChanged(val) {
    this.setState({ checkedThuE: val });
  }

  handleOnFriMChanged(val) {
    this.setState({ checkedFriM: val });
  }
  handleOnFriAChanged(val) {
    this.setState({ checkedFriA: val });
  }
  handleOnFriEChanged(val) {
    this.setState({ checkedFriE: val });
  }

  handleOnSatMChanged(val) {
    this.setState({ checkedSatM: val });
  }
  handleOnSatAChanged(val) {
    this.setState({ checkedSatA: val });
  }
  handleOnSatEChanged(val) {
    this.setState({ checkedSatE: val });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.emptyHeader}> </Text>

          <Text style={styles.headerLabel}> S </Text>
          <Text style={styles.headerLabel}> M </Text>
          <Text style={styles.headerLabel}> T</Text>
          <Text style={styles.headerLabel}> W </Text>
          <Text style={styles.headerLabel}> T</Text>
          <Text style={styles.headerLabel}> F</Text>
          <Text style={styles.headerLabel}> S</Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.header}> Morning </Text>

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSunM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSunMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedMonM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnMonMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedTueM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnTueMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedWedM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnWedMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedThuM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnThuMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedFriM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnFriMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSatM}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSatMChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.header}> Afternoon </Text>

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSunA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSunAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedMonA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnMonAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedTueA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnTueAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedWedA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnWedAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedThuA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnThuAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedFriA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnFriAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSatA}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSatAChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />
        </View>

        <View style={styles.lastSubContainer}>
          <Text style={styles.header}> Evening </Text>

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSunE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSunEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedMonE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnMonEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedTueE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnTueEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedWedE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnWedEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedThuE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnThuEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedFriE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnFriEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />

          <CheckBox
            style={styles.cbox}
            iconSize={32}
            iconName="faMix"
            checked={this.state.checkedSatE}
            checkedColor="#404040"
            uncheckedColor="#BABABA"
            onChange={this.handleOnSatEChanged.bind(this)}
            disabled={false}
            disabledColor="red"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7C7"
  },
  subContainer: {
    flex: 1,
    flexDirection: "row"
  },
  lastSubContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5
  },
  header: {
    flex: 3,
    fontSize: 14,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book",
    marginTop: "1%",
    paddingLeft: "6%"
  },
  emptyHeader: {
    flex: 3.8
  },
  cbox: {
    flex: 1
  },
  headerLabel: {
    flex: 1,
    fontSize: 14,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book"
  }
});
