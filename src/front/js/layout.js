import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import injectContext from "./store/appContext";
import { UserProfile } from "./pages/userProfile";
import { Homepageafterlogin } from "./pages/homepageafterlogin";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import ScrollToTop from "./component/scrollToTop";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
