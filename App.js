/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import SimpleAnimation from './components/SimpleAnimation';

class App extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <SimpleAnimation/>
            </>
        );
    }
};

const styles = StyleSheet.create({
    
});

export default App;
