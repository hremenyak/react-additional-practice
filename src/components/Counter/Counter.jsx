import React from 'react';
import '../Counter/Counter.css';
import { Controls } from './Controls';
import { Value } from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = event => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
