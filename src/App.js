import React from "react";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sparepart from "./pages/Dashboard/SparePart";
import Service from "./pages/Dashboard/Service";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedIn") === "true" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <PrivateRoute exact path="/">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute exact path="/service">
          <Service/>
        </PrivateRoute>
        <PrivateRoute exact path="/sparepart">
          <Sparepart/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
