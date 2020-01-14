import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class OpacityAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.opacityValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.opacityValue.setValue(0);
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    }

    render() {
        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.icon,
                        { opacity }
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

export default OpacityAnimations;