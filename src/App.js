import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Library/Components/header';
import Footer from './Library/Components/footer';

import loadable from '@loadable/component';

const HomeAsync = loadable(() => import('./Library/pages/home'), {
  fallback: <div>Loading...</div>,
});

const AboutAsync = loadable(() => import('./Library/pages/about'), {
  fallback: <div>Loading...</div>,
});

const TasklistAsync = loadable(() => import('./tasklists/index'), {
  fallback: <div>Loading...</div>,
});

const NoMatchAsync = loadable(() => import('./Library/pages/noMatch'), {
  fallback: <div>Loading...</div>,
});


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
                <Route path="/" exact component={HomeAsync} />
                <Route path="/about/" component={AboutAsync} />
                <Route path="/tasklist/" component={TasklistAsync} />
                <Route component={NoMatchAsync} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
    
  );
}

export default App;
