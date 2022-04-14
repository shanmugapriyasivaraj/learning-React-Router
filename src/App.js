import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
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
