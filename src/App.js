import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import Place from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";

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
            <NewPlace />
          </Route>

          <Route path='/:uid/places' exact>
            <UserPlaces />
          </Route>
          
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
 