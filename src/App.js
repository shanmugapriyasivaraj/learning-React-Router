import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
