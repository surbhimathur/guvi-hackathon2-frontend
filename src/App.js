import "./App.css";

import { Route, Switch } from "react-router-dom";

import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Navigation } from "./Navigation";
import { Products } from "./Products";

function App() {
  return (
    <div className="App">
      <div className="outer_box">
        <Navigation />
        <section>
       
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
