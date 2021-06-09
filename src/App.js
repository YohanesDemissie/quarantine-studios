import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Services from './pages/Services';
import About from './pages/About';
import Welcome from './pages/Welcome';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        {/* <Route path="/services" component={Services} /> */}
        {/* <Route path="/videos" component={Videos} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/thankyou" component={ThankYou} />
      </React.Fragment>
    </Router>
  );
}

export default App;
