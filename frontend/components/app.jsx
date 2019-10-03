import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { SplashContainer } from "./splash/splash_container";
import Default from "./default";

const App = () => (
  <>

    <Route path="/@me" component={Default} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashContainer} />
  </>
);

export default App;