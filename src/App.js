import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import {useState, useCallback} from 'react';
import React from "react";

import Users from "./users/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
      setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;

  if(isLoggedIn){
    routes = (
      <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/:uid/places" exact>
              <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
              <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
      </Switch>
    );
  }else{
    routes = (
      <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/:uid/places" exact>
              <UserPlaces />
          </Route>
          <Route path="/auth" exact>
              <Auth />
          </Route>
          <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}>
      <Router>
      <MainNavigation />
        <main>
           {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
