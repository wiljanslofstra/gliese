import React from 'react';
import { connect } from 'react-redux';
import { actionExample } from '../actions';

let ContainerExample = ({ dispatch }) => {
  return (
    <div>
      Form
    </div>
  );
};

ContainerExample = connect()(ContainerExample);

export default ContainerExample;
