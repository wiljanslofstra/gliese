
import React from 'react';
import HomeButton from '../modules/home-button';

const HomeView = React.createClass({
  propTypes: {
    incrementText: React.PropTypes.string,
    decrementText: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      incrementText: 'Increment',
      decrementText: 'Decrement',
    };
  },

  getInitialState() {
    return {
      clicks: 0,
    };
  },

  changeClicks(modifier) {
    this.setState({ clicks: this.state.clicks + modifier });
  },

  render() {
    return (
      <div>
        Number of clicks: {this.state.clicks}<br />

        <HomeButton onChange={this.changeClicks} modifier="1">
          {this.props.incrementText}
        </HomeButton>

        <HomeButton onChange={this.changeClicks} modifier="-1">
          {this.props.decrementText}
        </HomeButton>
      </div>
    );
  },
});

export default HomeView;
