import React, { Component } from "react";
import Button from "react-native-button";
import globalStyles from "../../globalStyles";

import { StyleSheet, Image, View, Text } from "react-native";

export default class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleIndexAussieOpen: 0,
      styleIndexRolandGarros: 0,
      styleIndexWimbledon: 0,
      styleIndexUSOpen: 0,
      styleIndexLavarCup: 0,
      styleIndexDavisCup: 0,
      styleIndexFedCup: 0,
      styleIndexHopmanCup: 0
    };
  }
  _handlePressAussieOpen() {
    if (this.state.styleIndexAussieOpen === 0) {
      this.setState({
        styleIndexAussieOpen: 1,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexAussieOpen: 0 });
    }
  }

  _handlePressRolandGarros() {
    if (this.state.styleIndexRolandGarros === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 1,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexRolandGarros: 0 });
    }
  }

  _handlePressWimbledon() {
    if (this.state.styleIndexWimbledon === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 1,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexWimbledon: 0 });
    }
  }

  _handlePressUSOpen() {
    if (this.state.styleIndexUSOpen === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 1,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexUSOpen: 0 });
    }
  }

  _handlePressLavarCup() {
    if (this.state.styleIndexLavarCup === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 1,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexLavarCup: 0 });
    }
  }

  _handlePressDavisCup() {
    if (this.state.styleIndexDavisCup === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 1,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexDavisCup: 0 });
    }
  }

  _handlePressFedCup() {
    if (this.state.styleIndexFedCup === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 1,
        styleIndexHopmanCup: 0
      });
    } else {
      this.setState({ styleIndexFedCup: 0 });
    }
  }

  _handlePressHopmanCup() {
    if (this.state.styleIndexHopmanCup === 0) {
      this.setState({
        styleIndexAussieOpen: 0,
        styleIndexRolandGarros: 0,
        styleIndexWimbledon: 0,
        styleIndexUSOpen: 0,
        styleIndexLavarCup: 0,
        styleIndexDavisCup: 0,
        styleIndexFedCup: 0,
        styleIndexHopmanCup: 1
      });
    } else {
      this.setState({ styleIndexHopmanCup: 0 });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Button
            containerStyle={
              this.state.styleIndexAussieOpen === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressAussieOpen()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-aussie-open.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexAussieOpen === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Aussie Open
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />
          <Button
            containerStyle={
              this.state.styleIndexRolandGarros === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressRolandGarros()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-roland-garros.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexRolandGarros === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Roland-Garros
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />

          <Button
            containerStyle={
              this.state.styleIndexWimbledon === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressWimbledon()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-wimbledon.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexWimbledon === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Wimbledon
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />

          <Button
            containerStyle={
              this.state.styleIndexUSOpen === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressUSOpen()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-us-open.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexUSOpen === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  US Open
                </Text>
              </View>
            </View>
          </Button>
        </View>

        <View style={styles.subContainer}>
          <Button
            containerStyle={
              this.state.styleIndexLavarCup === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressLavarCup()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-laver-cup.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexLavarCup === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Laver Cup
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />
          <Button
            containerStyle={
              this.state.styleIndexDavisCup === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressDavisCup()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-davis-cup.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexDavisCup === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Davis Cup
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />

          <Button
            containerStyle={
              this.state.styleIndexFedCup === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressFedCup()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-fed-cup.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexFedCup === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Fed Cup
                </Text>
              </View>
            </View>
          </Button>

          <View style={styles.emptyContainer} />

          <Button
            containerStyle={
              this.state.styleIndexHopmanCup === 0
                ? styles.buttonStyle
                : styles.buttonStyleClicked
            }
            onPress={() => this._handlePressHopmanCup()}
          >
            <View style={styles.btnContainer}>
              <Image
                source={require("../../../assets/png/ball-hopman-cup.png")}
                resizeMode={"contain"}
                style={styles.image}
              />
              <View style={styles.fontContainer}>
                <Text
                  style={
                    this.state.styleIndexHopmanCup === 0
                      ? styles.buttonText
                      : styles.buttonTextClicked
                  }
                >
                  Hopman Cup
                </Text>
              </View>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7C7"
  },
  emptyContainer: {
    flex: 0.3
  },
  btnContainer: {
    flex: 1,
    alignItems: "center"
  },
  fontContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "7%",
    marginHorizontal: "1%"
  },
  image: {
    marginTop: 5,
    alignSelf: "center",
    width: 30,
    height: 30
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: globalStyles.backgroundColor,
    borderWidth: 1,
    borderColor: "#535353",
    justifyContent: "center"
  },
  buttonStyleClicked: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: globalStyles.buttonColor,
    borderWidth: 1,
    borderColor: "#535353",
    justifyContent: "center"
  },
  buttonText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 12,
    color: "#535353",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book"
  },
  buttonTextClicked: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontWeight: "normal",
    fontFamily: "AvenirLTStd-Book"
  }
});
