import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import { Home, Login, Account } from "./pages";
import PrivateRoute from "./core/guards/PrivateRouter";
const Feature = lazy(() => import("./pages/Feature"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Switch>
            <Route path="/product">
              <Feature />
            </Route>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
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
