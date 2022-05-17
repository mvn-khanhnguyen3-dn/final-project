import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Header, Footer} from './components/layouts'
import {Feature,Home,Login,Account} from './pages'
import PrivateRoute from "./core/guards/PrivateRouter";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/product">
            <Feature />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute path="/account">
          <Account />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
