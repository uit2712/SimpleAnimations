/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import ColorAnimations from './components/ColorAnimations';
import OpacityAnimations from './components/OpacityAnimations';
import RotateAnimations from './components/RotateAnimations';
import ScaleAnimations from './components/ScaleAnimations';
import ParallelAnimations from './components/ParallelAnimations';
import SpringAnimations from './components/SpringAnimations';
import SequenceAnimations from './components/SequenceAnimations';
import StaggerAnimations from './components/StaggerAnimations';

class App extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <SequenceAnimations loop={null}/>
        );
    }
};

export default App;
