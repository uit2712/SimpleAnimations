/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import SimpleAnimation from './components/SimpleAnimation';
import MultipleAnimations from './components/MultipleAnimations';
import RotateAnimations from './components/RotateAnimations';
import ScaleAnimations from './components/ScaleAnimations';
import OpacityAnimations from './components/OpacityAnimations';
import ColorAnimations from './components/ColorAnimations';
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
            <StaggerAnimations/>
        );
    }
};

export default App;
