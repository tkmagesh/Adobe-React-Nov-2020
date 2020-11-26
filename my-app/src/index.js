import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import BugTracker from './bugTracker';
import Projects from './projects'


//render the application
ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Projects />
      <BugTracker />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);