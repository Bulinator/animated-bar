import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import AnimatedBar from './src/components/AnimatedBar'

const window = Dimensions.get('window');
const DELAY = 250;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      let total = Math.random() * 100;
      let computeWidth = Math.floor((total / 100) * window.width);
      data.push(computeWidth);
    }

    this.setState({
      data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((value, index) =>
          <AnimatedBar value={value} width={window.width} delay={DELAY * index} key={index} />
        )}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  },
};
