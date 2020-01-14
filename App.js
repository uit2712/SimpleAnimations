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
import MultipleAnimations from './components/MultipleAnimations';

class App extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <MultipleAnimations/>
            </>
        );
    }
};

const styles = StyleSheet.create({
    
});

export default App;
