import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { SplashContainer } from "./splash/splash_container";
import Default from "./default";
import ChannelsIndexContainer from "./channels/channels_index_container";

import Modal from "./modal/modal";

const App = () => (
  <>
    <Modal />
    <Route path="/channels/" component={Default} /> 
    <Switch>
      
      
      <Route path="/channels/:serverId/:channelId" component={ChannelsIndexContainer} />
      
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <Route exact path="/" component={SplashContainer} />
  </>
);

export default App;

//make sure i can't get to /@me without being logged in (Protected Route)