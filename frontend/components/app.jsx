import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { SplashContainer } from "./splash/splash_container";
import DefaultContainer from "./default_container";
import ChannelsIndexContainer from "./channels/channels_index_container";
import InviteContainer from './servers/invite_container';
import DmChatContainer from './dms/dm_chat_container';

import Modal from "./modal/modal";

const App = () => (
  <>
    <Modal />
    <ProtectedRoute path="/channels/" component={DefaultContainer} /> 
    <ProtectedRoute path="/channels/@me/:dmchannelId" component={DmChatContainer} />
    <Switch>
      <ProtectedRoute exact path="/servers/invite/:invitationUrl" component={InviteContainer} />
      <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelsIndexContainer} /> 
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <Route exact path="/" component={SplashContainer} />
  </>
);

export default App;

