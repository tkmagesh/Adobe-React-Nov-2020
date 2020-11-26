import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import BugTracker from './bugTracker';
import Projects from './projects'
import ErrorDisplay from './error';

import axios from 'axios';
window['axios'] = axios;

//render the application
ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Projects />
      <BugTracker />
      <br />
      <ErrorDisplay />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);