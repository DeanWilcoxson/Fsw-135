import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Auth from "./Components/Auth.js";
import Profile from "./Components/Profile.js";
import Public from "./Components/public.js";
import { UserContext } from "./Context/userContext.js";

export default function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div>
      <Navbar logout={logout} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <Route
          exact
          path="/profile"
          render={() => (!token ? <Redirect to="/" /> : <Profile />)}
        />
        <Route
          exact
          path="/public"
          render={() => (!token ? <Redirect to="/" /> : <Public />)}
        />
      </Switch>
    </div>
  );
}
