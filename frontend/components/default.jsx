import React from "react";
import ServersContainer from './servers/servers_container';
import Wumpus from './wumpus';

const SplashContainer = () => {
  return (
    <div>
      <ServersContainer />
      <div className="leftbar">

      </div>

      <div className="rightside">
        <Wumpus />
      </div>

    </div>
  )
}
export default SplashContainer;