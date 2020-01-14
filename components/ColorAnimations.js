import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

class ColorAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.colorValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.colorValue.setValue(0);
        Animated.timing(
            this.colorValue,
            {
                toValue: 60,
                duration: 5000
            }
        ).start(() => this.startAnimation());
    }

    render() {
        const color = this.colorValue.interpolate({
            inputRange: [0, 10, 30, 50, 60],
            outputRange: ['yellow', 'orange', 'red', 'orange', 'yellow']
        })

        return (
            <Animated.View
                style={[
                    styles.box,
                    { backgroundColor: color }
                ]}
            />
        )
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

export default ColorAnimations;