import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import ConvertScreen from './containers/ConvertScreen';
import CategoryScreen from './containers/CategoryScreen';
import connect from 'react-redux/lib/connect/connect';

const AppNavigator = StackNavigator({
    ConvertScreen: {
        screen: ConvertScreen
    },
    CategoryScreen: {
        screen: CategoryScreen
    }
})

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("ConvertScreen")
);

export const navigationReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

class AppWithNavigation extends PureComponent {
    state = {}
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        )
    }
}

const MapAppStateToProps = ({nav}) => ({nav})

export const AppNavigation = connect(MapAppStateToProps)(AppWithNavigation);