import React, { Component } from 'react';
import {
    View,
    Animated,
    Image,
    Easing,
    Dimensions,
    StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('../images/cloudy.png');
const cloudsImage = require('../images/cloud.png');
const planeImage = require('../images/transport.png');
const cloudWidth = 60;
const cloudHeight = 35;
const cloudsWidth = 100;
const cloudsHeight = 73;
const planeWidth = 150;
const planeHeight = 100;

class MultipleAnimations extends Component<Props> {

    UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.animatedValue.setValue(1);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0,
                duration: 6000,
                easing: Easing.linear,
            }
        ).start(() => this.startAnimation());
    }

    render() {
        const left1 = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-cloudWidth, width]
        });

        const left2 = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-cloudWidth * 5, width + cloudWidth * 5]
        });

        return (
            <>
                <Animated.Image
                    style={[
                        styles.cloud1,
                        { left: left1 }
                    ]}
                    source={cloudImage}
                />
                <Image
                    style={[
                        styles.cloud1,
                        styles.plane,
                    ]}
                    source={planeImage}
                />
                <Animated.Image
                    style={[
                        styles.cloud1,
                        styles.cloud2,
                        { left: left2 }
                    ]}
                    source={cloudsImage}
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    cloud1: {
        position: 'absolute',
        width: cloudWidth,
        height: cloudHeight,
        top: height / 3 - cloudWidth / 2,
    },
    cloud2: {
        width: cloudsWidth * 1.5,
        height: cloudsHeight * 1.5,
        top: height / 2,
    },
    plane: {
        width: planeWidth,
        height: planeHeight,
        top: height / 2 - cloudWidth,
        left: width / 2 - cloudWidth / 2,
    }
});

export default MultipleAnimations;