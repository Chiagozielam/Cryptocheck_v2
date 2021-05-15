import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import "./App.css";
import Today from "./Today/Today";
import History from "./History/History";
import TopNavigation from "./components/topNavigation/topNavigation";
import Landing from "./components/landing";
import More from "./components/More";

class App extends Component {
  render() {
    return (
      <div className="white-text">
        <TopNavigation />
        <section className="results--section">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/more" component={More} />
          </Switch>
        </section>
        <footer>
          <p style={{ color: "black", padding: "1%", paddingLeft: "4%"}}>Made with love by <a style={{color: "#AA01FA"}} href="https://twitter.com/iamdanieldon">Daniel Don</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
