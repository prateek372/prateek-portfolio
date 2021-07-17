import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;