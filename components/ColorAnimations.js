import React, { Component } from 'react';
import {
    Animated,
    Easing,
    StyleSheet
} from 'react-native';

class ColorAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            timesLoop: this.props.loop,
            currentTimesLoop: 0
        };

        this.colorValue = new Animated.Value(0);
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
        this.colorValue.setValue(0);
        Animated.timing(
            this.colorValue,
            {
                toValue: 30, // maximum animated value
                duration: 3000, // 3s
                easing: Easing.linear
            }
        ).start(() => this.startAnimation()); // loop
    }

    render() {
        // length of inputRange = length of outputRange
        const backgroundColor = this.colorValue.interpolate({
            // inputRange means we split duration into times:
            // 0-20=>yellow-green, 20-30: green-yellow
            // and maxInput is 30, and we want colorValue reach 30
            inputRange: [0, 20, 30], // ascending values (times array)
            outputRange: ['yellow', 'green', 'yellow']
        });

        return (
            <Animated.View
                style={[
                    styles.container,
                    { backgroundColor }
                ]}>

            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default ColorAnimations;