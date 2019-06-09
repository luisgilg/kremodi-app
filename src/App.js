import React from 'react';
import ScreenLandingPage from './screens/screen.landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/layout.navigation-bar'
import Footer from './components/layout/layout.footer';
// import ScreenSingup from './screens/screen.singup';
import ScreenSingin from './screens/screen.singin';
import ScreenShop from './screens/screen.shop';
// import FirebaseInit from './components/system/component.firebase-init';

import {AppRoutes} from './app.routes';
function App() {
  return (
    // <FirebaseInit>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={AppRoutes.landing} exact component={ScreenLandingPage} />
          {/* <Route path={AppRoutes.signUp} component={ScreenSingup} /> */}
          <Route path={AppRoutes.signIn} component={ScreenSingin} />
          <Route path={AppRoutes.shop} component={ScreenShop} />
        </Switch>
        <Footer />
      </BrowserRouter>
    // </FirebaseInit>
  );
}

export default App;
