import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  return (
    <AuthContext.Provider>
      <Router>
        
        <main>
          <Switch>
            <Route path="/" exact={true}>
              <Users />
            </Route>

            <Route path="/places/new" exact>
              <NewPlace />
            </Route>

            <Route path="/:uid/places" exact>
              <UserPlaces />
            </Route>

            <Route path="/places/:placeId">
              <UpdatePlace />
            </Route>

            <Route path="/auth" exact>
              <Auth />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
        <MainNavigation />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
