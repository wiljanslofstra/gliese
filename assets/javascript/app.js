
import React from 'react';
import ReactDOM from 'react-dom';

import 'imports?this=>window!./vendor/modernizr';

const container = document.createElement('div');
container.id = 'container';
document.getElementsByTagName('body')[0].appendChild(container);

import HomeView from './views/home';

ReactDOM.render(<HomeView />, document.getElementById('container'));
