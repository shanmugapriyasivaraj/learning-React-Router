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
import Post from "./Post";
import Protected from "./Protected";
import NotFound from "./NotFound";

function PrivateRoute({ path, component: Component }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Route
      path={path}
      render={() => {
        return isLoggedIn ? <Component /> : <p>Please login</p>;
      }}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink exact activeClass="active-nav" to="/">
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/about">
          About
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/posts">
          Posts
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/protected">
          Protected
        </NavLink>
        <button
          onClick={() => {
            localStorage.setItem("isLoggedIn", true);
          }}
        >
          Login
        </button>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" omponent={Post} />
        <PrivateRoute path="/posts" component={Posts} />
        <PrivateRoute path="/protected" component={Protected} />
        <Route path="/home" />
        <Redirect to="/" />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
