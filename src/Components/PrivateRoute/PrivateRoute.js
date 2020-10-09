import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <Route
    {...rest}
    render={({ location }) =>
    (loggedInUser.email || sessionStorage.getItem('token')) ? (
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
};

export default PrivateRoute;