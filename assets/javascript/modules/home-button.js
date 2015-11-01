import React from 'react';

const HomeButton = React.createClass({
  propTypes: {
    modifier: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.component,
      React.PropTypes.arrayOf(React.PropTypes.component),
    ]),
  },

  getDefaultProps() {
    return {
      children: 'Button',
    };
  },

  onClick() {
    const modifier = parseInt(this.props.modifier, 10);
    this.props.onChange(modifier);
  },

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  },
});

export default HomeButton;
