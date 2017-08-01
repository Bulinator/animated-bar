import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';
import randomcolor from 'randomcolor';

class AnimatedBar extends Component {
  constructor() {
    super();
    this.width = new Animated.Value(0);
    this.state = {
      color: randomcolor(),
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.width, {
        toValue: value,
      }),
    ]).start();
  }

  render() {
    const barStyles = {
      backgroundColor: this.state.color,
      height: 40,
      width: this.width,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };

    return (
      <Animated.View style={barStyles}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {Math.floor((this.props.value * 100) / this.props.width)}%
          </Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  }
};

export default AnimatedBar;
