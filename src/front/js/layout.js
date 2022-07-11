import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Homepageafterlogin } from "./pages/homepageafterlogin";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { YourDistance } from "./pages/yourDistance";
// import { StravaRedirect } from "./pages/stravaRedirect";
import { UserProfile } from "./pages/userProfile";
import { NuestraWeb } from "./pages/nuestraWeb";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/homepageafterlogin">
            <Homepageafterlogin />
          </Route>
          <Route exact path="/yourDistance">
            <YourDistance />
          </Route>
          {/* <Route exact path="/stravaRedirect">
            <StravaRedirect />
          </Route> */}
          <Route exact path="/userProfile">
            <UserProfile />
          </Route>
          <Route exact path="/nuestraWeb">
            <NuestraWeb />
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
