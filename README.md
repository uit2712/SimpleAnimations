# Simple Animations in React Native

<h2>Table of contents</h2>
<b>1. Introduce to animation in React Native</b><br>
<b>2. Supported animated components</b><br>
<b>3. Animation types</b><br>
<b>4. Timing animation</b><br>
<b>5. Spring animation</b><br>
<b>6. Parallel animation</b><br>
<b>7. Sequence animation</b><br>
<b>8. Stagger animation</b><br>
<b>9. References</b><br>
<hr>
<h2>1. Introduce to animation in React Native</h2>
Animation is an important part of user experience design. It serves as feedback on user actions, informs users of system status, and guides them on how to interact with the interface.<br>
In React Native, it supports animations in an easy way. Let's explore together!
<h2>2. Supported animated components</h2>
I suppose that you already know the basics of React Native.<br>
Components are important in programming React Native. An mobile application is created with many components. And we have 3 components are supported animation:<br>
<b>- Image</b><br>
<b>- View</b><br>
<b>- Text</b><br>
And React Native splits clearly between normal components (such as <b>Text, Image, View</b>) and animated components (such as <b>Animated.Text, Animated.Image, Animated.View</b>). This means that animated components are in <b>Animated</b>.

```javascript
import {
	Animated
} from 'react-native';
```
<h2>3. Animation types</h2>
These are animation types:<br>
<b>- Timing animation</b>: The animation changes in a certain time.<br>
<b>- Spring animation</b>: This is a scale animation with a bounce effect.<br>
<b>- Parallel animation</b>: Start all the array of animations at a same time.<br>
<b>- Sequence animation</b>: Start the array of animations in a sequence, one afters one.<br>
<b>- Stagger animation</b>: Start the array of animations in a sequence, with a delay time when transition animation.<br>
<h2>4. Timing animation</h2>
<b>a. Color animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/color-animation.gif" title="Color animation" width="150"/>
<b>b. Multiple animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/multiple-animation.gif" title="Multiple animation" width="150"/>
<b>c. Opacity animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/opacity-animation.gif" title="Opacity animation" width="150"/>
<b>d. Rotate animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/rotate-animation.gif" title="Rotate animation" width="150"/>
<b>e. Scale animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/scale-animation.gif" title="Scale animation" width="150"/>
<b>f. Simple animation</b><br>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/simple-animation.gif" title="Simple animation" width="150"/>
<h2>5. Spring animation</h2>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/spring-animation.gif" title="Spring animation" width="150"/>
<h2>6. Parallel animation</h2>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/parallel-animation.gif" title="Parallel animation" width="150"/>
<h2>7. Sequence animation</h2>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/sequence-animation.gif" title="Sequence animation" width="150"/>
<h2>8. Stagger animation</h2>
<img src="https://github.com/uit2712/SimpleAnimations/blob/master/demo/stagger-animation.gif" title="Stagger animation" width="150"/>
<h2>9. References</h2>
- <a href="https://code.tutsplus.com/tutorials/practical-animations-in-react-native--cms-27567">Practical animations in React Native</a><br>
- <a href="https://code.tutsplus.com/tutorials/working-with-animations-in-react-native--cms-27328">Working with animations in React Native</a><br>
- <a href="https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae#...">React Native animations using the animated api</a><br>
