import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Layout from './shared/components/Layout';
import FormItemsContext from './shared/context/FormItems.context';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <FormItemsContext.Provider>
                <Home />
              </FormItemsContext.Provider>
            </Layout>
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
