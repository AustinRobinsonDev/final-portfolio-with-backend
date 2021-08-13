import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MessageState from './context/MessageState';


function App() {

  return (
    <MessageState>
      <Router>
        <div className='background'>
            <div className="container my-3 mainTiltContainer p-1">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Projects" component={Projects} />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    </MessageState>
  );
}

export default App;
