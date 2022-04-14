import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
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
