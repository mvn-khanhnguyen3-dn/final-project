import useAuth from "../../../hooks/useAuth";
import { Route, Redirect } from "react-router-dom";

function PrivateRouterLogin({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRouterLogin;
