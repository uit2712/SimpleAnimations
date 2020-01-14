import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Easing,
    View
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class RotateAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.icon,
                        {
                            transform: [
                                { rotate: spin }
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

export default RotateAnimations;