import React from 'react';
import ScreenLandingPage from './screens/ScreenLandingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar'
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={ScreenLandingPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
