import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class ParallelAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.opacityValue = new Animated.Value(0);
        this.spinValue = new Animated.Value(0);
        this.scaleValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.opacityValue.setValue(0);
        this.spinValue.setValue(0);
        this.scaleValue.setValue(0);
        Animated.parallel([
            Animated.timing(
                this.opacityValue,
                {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.scaleValue,
                {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear
                }
            )
        ]).start(() => this.startAnimation());
    }

    render() {
        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const nearFar = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 3, 1]
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.icon,
                        { opacity },
                        {
                            transform: [
                                { rotate: spin },
                                { scale: nearFar }
                            ]
                        }
                    ]}
                    source={loadingIcon}
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
    icon: {
        width: iconSize.width,
        height: iconSize.height
    }
})

export default ParallelAnimations;