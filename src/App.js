import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import UntitledPage from 'components/UntitledPage';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './App.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              {/* pxCode Screen List: <br />
              <Link to="/UntitledPage">UntitledPage</Link> */}
              <UntitledPage/>
            </div>
          </Route>

          <Route exact path="/tacos" component={UntitledPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
