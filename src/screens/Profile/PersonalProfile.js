"use strict";

import React from "react";
import CheckBox from "react-native-checkbox-heaven";
import DatePicker from "react-native-datepicker-latest";

import globalStyles from "../../globalStyles";
import Availability from "../../components/availability";
import FavouriteTournament from "../../components/favouriteTournament";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default class ProfilePage extends React.Component {
  static navigationOptions = {
    title: "Personal Profile",
    headerRight: <View />,
    headerStyle: {
      backgroundColor: globalStyles.backgroundColor
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      color: globalStyles.header,
      fontWeight: "normal",
      fontFamily: globalStyles.mainFontMedium,
      alignSelf: "center",
      textAlign: "center"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      checkedMale: false,
      checkedFemale: false,
      disabled: true
    };
  }

  handleOnMaleChanged(val) {
    this.setState({ checkedMale: true });
    this.setState({ checkedFemale: false });
  }
  handleOnFemaleChanged(val) {
    this.setState({ checkedMale: false });
    this.setState({ checkedFemale: true });
  }

  render() {
    const { name, date, checkedFemale, checkedMale } = this.state;

    const submitDisabled = () =>
      !name || !date || (!checkedFemale && !checkedMale);

    console.log("Signup.render");
    const { params } = this.props.navigation.state;
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: globalStyles.backgroundColor
        }}
        keyboardShouldPersistTaps={"handled"}
      >
        <View style={styles.container}>
          <Text style={styles.firstHeader}>Name</Text>

          <TextInput
            name="name"
            style={styles.textInput}
            placeholder="What is your name?"
            onChangeText={val => this.setState({ name: val })}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <Text style={styles.header}>Gender</Text>

          <View style={styles.lastCheckboxContainer}>
            <CheckBox
              style={styles.cboxLeft}
              label="Male"
              labelStyle={styles.labelStyle}
              iconSize={28}
              iconName="matCircleMix"
              checked={this.state.checkedMale}
              checkedColor="#404040"
              uncheckedColor="#BABABA"
              onChange={this.handleOnMaleChanged.bind(this)}
              disabled={false}
              disabledColor="red"
            />

            <View style={styles.emptyContainer} />

            <CheckBox
              style={styles.cboxRight}
              label="Female"
              labelStyle={styles.labelStyle}
              iconSize={28}
              iconName="matCircleMix"
              checked={this.state.checkedFemale}
              checkedColor="#404040"
              uncheckedColor="#BABABA"
              onChange={this.handleOnFemaleChanged.bind(this)}
              disabled={false}
              disabledColor="red"
            />
          </View>

          <Text style={styles.header}>Date of Birth</Text>

          <DatePicker
            style={{ width: "100%", marginVertical: 15 }}
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            minDate="1900-05-01"
            maxDate="2010-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            placeholder="When is your birthday?"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 45
              },
              dateText: {
                fontFamily: "AvenirLTStd-Book",
                fontWeight: "normal",
                fontSize: 14
              },
              placeholderText: {
                fontFamily: "AvenirLTStd-Book",
                fontWeight: "normal",
                fontSize: 14
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />

          <Text style={styles.header}>Home Court</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Where is your home court?"
            onChangeText={val => this.setState({ email: val })}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <Text style={styles.header}>General Availability</Text>
          <Text style={styles.headerDescription}>
            When are you generally available?
          </Text>

          <Availability />

          <Text style={styles.header}>Favourite Tournament</Text>
          <Text style={styles.headerDescription}>
            What is your favourite major tournament?
          </Text>

          <FavouriteTournament />

          <TouchableOpacity
            style={submitDisabled() ? styles.btnNextDisabled : styles.btnNext}
            disabled={submitDisabled()}
          >
            <Text style={styles.btnNextText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: globalStyles.backgroundColor,
    width: "85%"
  },
  firstHeader: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginTop: 15
  },
  headerDescription: {
    fontSize: 13,
    color: globalStyles.headerDescriptionColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    marginVertical: "2%",
    marginBottom: "5%"
  },
  labelStyle: {
    fontSize: 15,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook,
    paddingLeft: "2%"
  },
  header: {
    fontSize: 16,
    color: globalStyles.headerColor,
    fontWeight: "normal",
    fontFamily: globalStyles.mainFontBook
  },
  textInput: {
    height: 50,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    fontFamily: globalStyles.mainFontBook,
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 10
  },
  btnNext: {
    alignSelf: "center",
    backgroundColor: globalStyles.primaryColor,
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15
  },
  btnNextDisabled: {
    alignSelf: "center",
    backgroundColor: globalStyles.buttonDisabledColor,
    width: WIDTH - 125,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15
  },
  btnNextText: {
    alignSelf: "center",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 19,
    fontFamily: globalStyles.mainFontBook
  },
  checkboxContainer: {
    flexDirection: "row",
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  lastCheckboxContainer: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.lineSeparatorColor,
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10
  },
  cboxLeft: {
    flex: 1
  },
  cboxRight: {
    flex: 1
  },
  emptyContainer: {
    flex: 0.5
  }
});
