import React from "react";
import Android from "./android";
import Bomb from "./bomb";
import Cartridge from "./cartridge";
import Coin from "./coin";
import Controller from "./controller";
import Desktop from "./desktop";
import Headphones from "./headphones";
import Iphone from "./iphone";
import Laptop from "./laptop";
import Mariobox from "./mario_box";
import GreetingContainer from "../greetings/greeting_container";

export const SplashContainer = () => {
  return (
    <div className="background">
      <header>
        <nav>
          <div className="nav_left">
            <h3>Placeholder</h3>
          </div>
          <div className="nav_right">
            <GreetingContainer />
          </div>
        </nav>
      </header>
      <div className="container">
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
        <Coin className="coin"/>
        <Mariobox />
        
      </div>
    </div>
  );
}

