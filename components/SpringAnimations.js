import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Easing
} from 'react-native';

const loadingIcon = require('../images/loading-icon.png');
const iconSize = { width: 100, height: 100 };

class SpringAnimations extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.springValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.springValue.setValue(0);
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start(() => this.startAnimation());
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.icon,
                        {
                            transform: [
                                { scale: this.springValue }
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

export default SpringAnimations;