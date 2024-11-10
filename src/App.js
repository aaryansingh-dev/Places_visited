import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import Place from "./places/pages/Place";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
 return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>

          <Route path="/places/new" exact>
            <Place />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
 