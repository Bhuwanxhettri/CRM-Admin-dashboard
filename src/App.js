import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import { useState } from "react";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignIn from "./pages/auth/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useSelector } from "react-redux";
import List from "./pages/user/List";
import userAdd from "./pages/user/Add";
import rolesAdd from "./pages/roles/Add";
function App() {
  const auth = useSelector((state) => state.Auth.isLoggedIn);
  return (
    <div className="App">
      <Switch>
        {auth && (
          <>
            <Route path="/" exact component={SignIn} />
          </>
        )}
        <Main>
          {!auth && (
            <>
              <Route exact path="/dashboard" component={Home} />
              {/* user route */}
              <Route exact path="/users" component={List} />
              <Route exact path="/user/add" component={userAdd} />

              {/* Role */}
              <Route exact path="/roles" component={rolesAdd} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/billing" component={Billing} />
              <Route exact path="/rtl" component={Rtl} />
              <Route exact path="/profile" component={Profile} />
              <Redirect from="*" to="/dashboard" />
            </>
          )}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
