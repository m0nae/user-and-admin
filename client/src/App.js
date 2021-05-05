import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
