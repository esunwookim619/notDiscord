import React from "react"
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchServers } from "./actions/server_actions";
import ChatRoom from "./components/messages/ChatRoom";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchServers = fetchServers;
  //TESTING

  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<ChatRoom />, root);
});