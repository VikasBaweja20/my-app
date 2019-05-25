import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Library/Components/header';
import Footer from './Library/Components/footer';
import Home from './Library/pages/home';
import About from './Library/pages/about';
import NoMatch from './Library/pages/noMatch';
import Tasklist from './tasklists/index';
function App() {
  return (
        <Router>
          <div
            style={{
              height: "100vh",
              flex: 1,
              flexDirection: "column",
              display: "flex"
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/tasklist/" component={Tasklist} />
                <Route component={NoMatch} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
     
    
    
  );
}

export default App;
