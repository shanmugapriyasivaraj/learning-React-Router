import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink exact activeStyle={{ color: "green" }} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/about">
          About
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/posts">
          Posts
        </NavLink>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/home" />
        <Redirect to="/" />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
