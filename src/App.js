import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import Footer from './components/layout/layout.footer';
import NavigationBar from './components/layout/layout.navigation-bar';
import Snackbar from './components/layout/layout.snack';
import ScreenLandingPage from './screens/screen.landing';
import ScreenOpenShop from './screens/screen.open-shop';
import ScreenProducts from './screens/screen.products';
import ScreenShop from './screens/screen.shop';
import ScreenSingin from './screens/screen.singin';




function App() {
  return (
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={AppRoutes.landing} exact component={ScreenLandingPage} />
          <Route path={AppRoutes.signIn} component={ScreenSingin} />
          <Route path={AppRoutes.shop} component={ScreenShop} />
          <Route path={AppRoutes.products} component={ScreenProducts} />
          <Route path={AppRoutes.openShop} component={ScreenOpenShop} />

        </Switch>
        <Footer />
        <Snackbar />
      </BrowserRouter>
  );
}

export default App;
