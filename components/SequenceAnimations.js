import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class SequenceAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.spinValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0);
        this.animationValues = [this.spinValue, this.springValue];
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.spinValue.setValue(0);
        this.springValue.setValue(0.3);

        Animated.sequence([
            Animated.spring(
                this.springValue,
                {
                    toValue: 1,
                    friction: 1
                }
            ),
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear
                }
            )
        ]).start(() => this.startAnimation());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={styles.container}>
               <Animated.Image
                    style={[
                        styles.icon,
                        {
                            transform: [
                                { scale: this.springValue },
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

export default SequenceAnimations;