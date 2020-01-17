import React, { Component } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    View
} from 'react-native';

const image = require('../images/loading-icon.png');
const imageSize = { width: 100, height: 100 };

// array of animations: rotate, scale
class ParallelAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            timesLoop: this.props.loop,
            currentTimesLoop: 0
        };

        this.rotateValue = new Animated.Value(0);
        this.scaleValue = new Animated.Value(0);
    }

    componentDidMount() {
        // start animation
        this.startAnimation();
    }

    startAnimation = () => {
        if (this.state.timesLoop != null
            && this.state.currentTimesLoop >= this.state.timesLoop)
            return;

        if (this.state.timesLoop != null)
            this.setState({
                currentTimesLoop: this.state.currentTimesLoop + 1
            });

        this.rotateValue.setValue(0);
        this.scaleValue.setValue(0);

        // rotate and scale image (start same time), same duration
        Animated.parallel([
            Animated.timing(
                this.rotateValue,
                {
                    toValue: 1, // maximum animated value
                    duration: 3000, // 3s
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.scaleValue,
                {
                    toValue: 1, // maximum animated value
                    duration: 3000, // 3s
                    easing: Easing.linear
                }
            )
        ]).start(() => this.startAnimation()); // loop
    }

    render() {
        // length of inputRange = length of outputRange
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1], // ascending values (times array)
            // 0-0.5: scale up from 1-2
            // 0.5-1: scale down from 2-1
            outputRange: [1, 2, 1]
        });

        const rotate = this.rotateValue.interpolate({
            inputRange: [0, 1], // ascending values (times array)
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.image,
                        { 
                            transform: [
                                { scale },
                                { rotate }
                            ]
                        }
                    ]}
                    source={image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: imageSize.width,
        height: imageSize.height
    }
});

export default ParallelAnimations;