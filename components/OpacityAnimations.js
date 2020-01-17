import React, { Component } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    View
} from 'react-native';

const image = require('../images/loading-icon.png');
const imageSize = { width: 100, height: 100 };

class OpacityAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            timesLoop: this.props.loop,
            currentTimesLoop: 0
        };

        this.opacityValue = new Animated.Value(0);
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
        this.opacityValue.setValue(0);
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1, // maximum animated value
                duration: 3000, // 3s
                easing: Easing.linear
            }
        ).start(() => this.startAnimation()); // loop
    }

    render() {
        // length of inputRange = length of outputRange
        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 0.5, 1], // ascending values (times array)
            // 0-0.5 (50% time of duration)=>opacity from 1 down to 0
            // 0.5-1 (left 50% time of duration)=>opacity from 0 up to 1
            outputRange: [1, 0, 1]
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.image,
                        { opacity }
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

export default OpacityAnimations;