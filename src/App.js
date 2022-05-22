import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import { Home, Login, Account,Register } from "./pages";
import PrivateRoute from "./core/guards/PrivateRouter";
import PrivateRouterLogin from "./core/guards/PrivateRouterLogin";
const Feature = lazy(() => import("./pages/Feature"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute path="/product">
              <Feature />
            </PrivateRoute>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <PrivateRouterLogin path="/login">
              <Login />
            </PrivateRouterLogin>
            <Route path="/register">
              <Register/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
