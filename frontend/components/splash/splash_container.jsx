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
import { withRouter } from 'react-router-dom';


class SplashContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinClass: "invis",
      wumpusClass: "invis",
      starClass: "invis",
      coinClass2: "invis",
      wumpusClass2: "invis",
      starClass2: "invis",
      coinClass3: "invis",
      wumpusClass3: "invis",
      starClass3: "invis",
      mushroomClass: "invis",
      mushroomClass2: "invis",
      mushroomClass3: "invis",
      coinClass4: "invis",
      wumpusClass4: "invis",
      starClass4: "invis",
      mushroomClass4: "invis",
    }
    // this.clickable = true;
    this.index = 0;
  }

// export const SplashContainer = () => {
  render() {
  return (
    
    <div className="splash">
        <nav>
        
          <div className="nav_left">
          <NotDiscordLogo />
            <a className="broken" target="_blank" href="https://github.com/esunwookim619?tab=repositories">Github</a>
            <a className="broken" target="_blank" href="https://www.linkedin.com/in/edward-kim-b47908122">LinkedIn</a>
            <a className="broken" target="_blank" href="https://www.facebook.com/">Facebook</a>
            <a className="broken" target="_blank" href="https://behold-aa.herokuapp.com">Behold</a>
            <a className="broken" target="_blank" href="https://www.instagram.com/">Instagram</a>
          </div>
          <div className="nav_right">
            <GreetingContainer />
          </div>
        </nav>
        <div className="wordcontainer">
          <p className="splashgreeting">It's time to ditch Discord and TeamSpeak.</p>
          <p className="splashmini">Text chats for AppAcademy students who need to communicate after graduation!</p>
          <p className="splashmini2">Stop using Discord and try this out instead!</p>
          <div className="buttoncontainer">
          <button className="nodl" onClick={() => this.props.history.push("/login")}>Login</button>
          <button className="noopen" onClick={() => this.props.history.push("/signup")}>Signup</button>
          </div>
        </div>
        <audio id="coin" src={window.coinnoise} type="audio/mp3"></audio>
        <audio id="star" src={window.starnoise} type="audio/mp3"></audio>
        <div className="electronics">
          <div className="aic">
            <Potion />
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
       
        <div className="extra-container">
          <div className="click-me">Click Me!</div>
          <img className="click-me-arrow" src={window.arrow}></img>
          <Bomb />

          <Coin num="1" />
          <Coin num="2" />
          {/* <Mariobox /> */}
          <img onClick={() => {
            // if (this.clickable) {
            // this.clickable = false;
            let arr = ["coinClass", "wumpusClass", "starClass", "mushroomClass", "coinClass2", "wumpusClass2", "starClass2", "mushroomClass2",
              "coinClass3", "wumpusClass3", "starClass3", "mushroomClass3",
              "coinClass4", "wumpusClass4", "starClass4", "mushroomClass4",];
            // let index = Math.round(Math.random() * 2);
            let newClass = arr[this.index];

            if (newClass === "coinClass" || newClass === "coinClass2" || newClass === "coinClass3" || newClass === "coinClass4") {
              let mp3 = document.getElementById("coin");
              mp3.play();
              this.setState({ [newClass]: "coin-ani" });
              setTimeout(() => this.setState({ [newClass]: "invis" }), 1000);
              // setTimeout(() => this.clickable = true, 1000);
            } else if (newClass === "wumpusClass" || newClass === "wumpusClass2" || newClass === "wumpusClass3" || newClass === "wumpusClass4") {
              this.setState({ [newClass]: "wumpus-ani" });
              setTimeout(() => this.setState({ [newClass]: "invis" }), 2000);
              // setTimeout(() => this.clickable = true, 2000);
            } else if (newClass === "starClass" || newClass === "starClass2" || newClass === "starClass3" || newClass === "starClass4") {
              let mp3 = document.getElementById("star");
              mp3.play();
              this.setState({ [newClass]: "star-ani" });
              setTimeout(() => this.setState({ [newClass]: "invis" }), 3300);
              // setTimeout(() => this.clickable = true, 3300);
            } else {
              this.setState({ [newClass]: "mushroom-ani" });
              setTimeout(() => this.setState({ [newClass]: "invis" }), 4500);
            }
            this.index = (this.index + 1) % 16;
            // }


          }} className="mariobox" src={window.marioboxURL} />
          <div className={this.state.coinClass}>
            < img className="spinner" src={window.coinURL}></img>
          </div>
          <div className={this.state.wumpusClass}>
            <img src={window.wumpus}></img>
          </div>
          <div className={this.state.starClass}>
            <img src={window.star}></img>
          </div>
          <div className={this.state.mushroomClass}>
            <img src={window.mushroom}></img>
          </div>
          <div className={this.state.mushroomClass2}>
            <img src={window.mushroom}></img>
          </div>
          <div className={this.state.mushroomClass3}>
            <img src={window.mushroom}></img>
          </div>
          <div className={this.state.mushroomClass4}>
            <img src={window.mushroom}></img>
          </div>
          <div className={this.state.coinClass2}>
            < img className="spinner" src={window.coinURL}></img>
          </div>
          <div className={this.state.wumpusClass2}>
            <img src={window.wumpus}></img>
          </div>
          <div className={this.state.starClass2}>
            <img src={window.star}></img>
          </div>
          <div className={this.state.coinClass3}>
            < img className="spinner" src={window.coinURL}></img>
          </div>
          <div className={this.state.wumpusClass3}>
            <img src={window.wumpus}></img>
          </div>
          <div className={this.state.starClass3}>
            <img src={window.star}></img>
          </div>
          <div className={this.state.coinClass4}>
            < img className="spinner" src={window.coinURL}></img>
          </div>
          <div className={this.state.wumpusClass4}>
            <img src={window.wumpus}></img>
          </div>
          <div className={this.state.starClass4}>
            <img src={window.star}></img>
          </div>
          <Circle num="1" />

          <Square num="1" />
          <Square num="2" />

          <Dot num="1" />
          <Dot num="2" />
          <Dot num="3" />
          <Dot num="4" />
          <Dot num="5" />

          <Triangle num="1" />
          <Triangle num="2" />
          <X num="1" />
          <X num="2" />


          <Circle num="2" />
        
        </div>
      
      
    </div>
    </div>
    
  );
  }
}

export default withRouter(SplashContainer);