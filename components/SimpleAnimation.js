/**
 * Sample React Native SimpleAnimation
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

const { width, height } = Dimensions.get('window');
const cloudImage = require('../images/cloudy.png');
const imageWidth = 80;
const imageHeight = 47;

class SimpleAnimation extends Component<Props> {

    UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.animatedValue.setValue(width);
        Animated.timing(
            this.animatedValue,
            {
                toValue: -imageWidth,
                duration: 6000,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    }

    render() {
        return (
            <Animated.Image
                style={[
                    styles.image,
                    { left: this.animatedValue },
                ]}
                source={cloudImage}
            />
        );
    }
};

const styles = StyleSheet.create({
    image: {
        height: imageHeight,
        position: 'absolute',
        top: height/3,
        width: imageWidth,
    },
});

export default SimpleAnimation;
