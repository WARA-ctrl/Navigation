import Home from "./component/page/Home";
import Map from "./component/page/Map";
import User from "./component/page/User";
import "./App.css";
import Navigation from "./component/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/map" component={Map} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
