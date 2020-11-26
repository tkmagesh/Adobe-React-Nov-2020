import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';

import store from './store';

import BugTracker from './bugTracker';
import Projects from './projects'
import ErrorDisplay from './error';

import TimerContainer from './timer';

const Home = () => (
  <div>
    <p>Et et fugiat anim sunt cillum. Commodo in commodo mollit pariatur non qui velit laboris reprehenderit labore. Nulla minim in fugiat do fugiat elit nulla et sunt. Cillum sunt exercitation pariatur quis in tempor. Excepteur Lorem occaecat sint incididunt. Culpa ad mollit ex qui. Tempor Lorem occaecat incididunt officia consectetur do dolor in culpa.</p>
    <p>Labore adipisicing Lorem pariatur anim incididunt reprehenderit voluptate nulla excepteur dolore proident. Ullamco reprehenderit laboris sint nulla ex labore non aliqua enim. Esse cillum eu sit magna in consequat exercitation nostrud dolor id veniam irure id. Magna dolore officia nulla minim adipisicing sint sunt elit ipsum anim.</p>
    <p>Laboris ex nulla enim Lorem. Do aliqua irure enim veniam commodo voluptate culpa ea ad fugiat voluptate occaecat. Anim cupidatat fugiat do Lorem consequat sunt in nisi mollit dolore. Anim aute ullamco reprehenderit ea aliqua amet non dolore aliqua aliquip enim anim nostrud duis.</p>
    <p>Sunt laborum ipsum et aute duis tempor ex. Aliqua cillum culpa excepteur adipisicing tempor Lorem dolore consectetur. Proident veniam ipsum ad deserunt in amet magna nostrud qui laborum ipsum sunt. Et est culpa sunt exercitation nostrud ut sunt nostrud aliqua reprehenderit pariatur labore. Minim laboris sint deserunt ullamco ad irure reprehenderit cupidatat elit esse sint aliquip.</p>
  </div>
);
//render the application
ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Router>
        <h1>My App</h1>
        <div>
          <span>
            <Link to="/"> [ Home ] </Link>
          </span>
          <span>
            <Link to="/bugs"> [ Bugs ] </Link>
          </span>
          <span>
            <Link to="/projects"> [ Projects ] </Link>
          </span>
        </div>
        <hr />
        <TimerContainer />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/bugs">
            <BugTracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <br />
        <ErrorDisplay />
      </Router>
    </Fragment>
  </Provider>,
  document.getElementById("root")
);