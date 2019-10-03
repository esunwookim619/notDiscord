import React from "react";
import Android from "./android";
import Bomb from "./bomb";
import Cartridge from "./cartridge";
import Coin from "./coin";
import Coin2 from "./coin2";
import Controller from "./controller";
import Desktop from "./desktop";
import Headphones from "./headphones";
import Iphone from "./iphone";
import Laptop from "./laptop";
import Mariobox from "./mario_box";
import GreetingContainer from "../greetings/greeting_container";
import Circle from "./circle";
import Square from "./square";

export const SplashContainer = () => {
  return (
    <>
    <div className="splash">
        <nav>
          <div className="nav_left">
            <h3>Nav Link1</h3>
            <h3>Nav Link2</h3>
            <h3>Nav Link3</h3>
          </div>
          <div className="nav_right">
            <GreetingContainer />
          </div>
        </nav>
      <div className="container">
        <div className="wordcontainer">
          <p className="splashgreeting">It's time to ditch Discord and TeamSpeak.</p>
          <p className="splashmini">No voice and only text chats for AppAcademy students that works only on full screen monitors of atleast 15".</p>
          <p className="splashmini2">Stop using Discord and complicate your life.</p>
        </div>
        <div className="electronics">
          <div className="aic">
            <Android />
            <Iphone />
            <Controller />
          </div>
          <div className="dlh">
            <Desktop />
            <Laptop />
            <Headphones />
          </div>
        </div>

        <Bomb />
        <Cartridge />
        <Coin />
        <Coin2 />
        <Mariobox />
        <Circle />

        <Square num="1"/>
        <Square num="2" />
      </div>
      
    </div>
    </>
  );
}

