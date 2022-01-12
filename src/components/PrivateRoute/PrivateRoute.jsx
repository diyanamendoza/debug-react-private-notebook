import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser()
  const isNotAuthenticated = (user) => {
    return Object.keys(user).length === 0
  }

  return (
    <Route
        {...rest}
        render={({ location }) => isNotAuthenticated(user) ? 
        <Redirect to={{
            pathname: '/login',
            state: { from: location }
         }} /> : children }
    />
    )
}
