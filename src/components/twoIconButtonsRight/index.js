import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

import { Icon } from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';

class TwoIconButtonsRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onProfileIconPressed = () => {
        console.log('_onProfileIconPressed');
        this.props.navigation.navigate(
            'PersonalProfile');
    };

    _onMenuIconPressed = () => {
        console.log('_onMenuIconPressed');
        this.props.navigation.openDrawer();

    };


    render() {
        return (
            <View style={styles.container}>

                <Icon name="md-person" onPress={this._onProfileIconPressed} style={{marginRight: 25 }} />
                <Icon name="md-menu" onPress={this._onMenuIconPressed} style={{ paddingRight: 15 }} />

            </View>
        );
    }
}

export default withNavigation(TwoIconButtonsRight);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row'
    }

});
