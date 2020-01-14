import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class ScaleAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.scaleValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    }

    render() {
        const nearFar = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 3, 1]
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.icon,
                        {
                            transform: [
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

export default ScaleAnimations;