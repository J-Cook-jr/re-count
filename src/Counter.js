import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementFive, decrementFive } from './actions';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrementFive}>-5</button>
          <button onClick={this.props.decrement}>-1</button>
          <span>{this.props.counterValue}</span>
          <button onClick={this.props.increment}>+1</button>
          <button onClick={this.props.incrementFive}>+5</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.count
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementFive,
  decrementFive
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);