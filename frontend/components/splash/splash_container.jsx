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
import Circle from "./circle";
import Square from "./square";
import Dot from "./dot";
import Triangle from "./triangle";
import X from "./x";
import Weight from "./weight";
import Potion from "./potion";
import NotDiscordLogo from './notdiscordlogo';

export const SplashContainer = () => {
  return (
    
    <div className="splash">
        <nav>
        
          <div className="nav_left">
          <NotDiscordLogo />
            <a className="broken" href="https://github.com/esunwookim619?tab=repositories">Github</a>
            <a className="broken" href="https://www.linkedin.com/in/edward-kim-b47908122">LinkedIn</a>
            <a className="broken" href="https://www.facebook.com/">Facebook</a>
            <a className="broken"href="https://behold-aa.herokuapp.com">Behold</a>
          <a className="broken" href="https://www.instagram.com/">Instagram</a>
          </div>
          <div className="nav_right">
            <GreetingContainer />
          </div>
        </nav>
        <div className="wordcontainer">
          <p className="splashgreeting">It's time to ditch Discord and TeamSpeak.</p>
          <p className="splashmini">Text chats for AppAcademy students that works best on full screen monitors of atleast 20".</p>
          <p className="splashmini2">Stop using Discord and try this out instead!</p>
          <div className="buttoncontainer">
          <button className="nodl">Cannot download</button>
          <button className="noopen">Just click the Login button</button>
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
            <Cartridge />
            <Weight />
          </div>
       
        
        <Bomb />
        
        <Coin num="1" />
        <Coin num="2"/>
        <Mariobox />
        <Circle num="1" />

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
       
        <Potion />
        <Circle num="2" />
      
      
      
    </div>
    </div>
    
  );
}

