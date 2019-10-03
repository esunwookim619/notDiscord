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
import Dot from "./dot";
import Triangle from "./triangle";
import X from "./x";

export const SplashContainer = () => {
  return (
    <>
    <div className="splash">
        <nav>
          <div className="nav_left">
            <h3 className="broken">Broken link</h3>
            <h3 className="broken">Broken link</h3>
            <h3 className="broken">Broken link ⌄</h3>
            <h3 className="broken">Broken link ⌄</h3>
            <h3 className="broken">Broken link ⌄</h3>
          </div>
          <div className="nav_right">
            <GreetingContainer />
          </div>
        </nav>
      <div className="container">
        <div className="wordcontainer">
          <p className="splashgreeting">It's time to ditch Discord and TeamSpeak.</p>
          <p className="splashmini">No voice and only text chats for AppAcademy students that works only on full screen monitors of atleast 20".</p>
          <p className="splashmini2">Stop using Discord and complicate your life.</p>
          <div className="buttoncontainer">
          <button className="nodl">Cannot download</button>
          <button className="noopen">Do not open</button>
          </div>
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

        <Dot num="1" />
        <Dot num="2" />
        <Dot num="3" />
        <Dot num="4" />
        <Dot num="5" />
  
        <Triangle num="1"/>
        <Triangle num="2"/>
        <X num="1" />
        <X num="2" />
      </div>
      
    </div>
    </>
  );
}

