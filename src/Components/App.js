import React from 'react'
import SignUp from './SignUp'
import Dashboard from './Dashboard';
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../Context/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import UpdateProfile from './UpdateProfile';


function App() {
  return (
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }} >
      <div 
        className="w-100"
        style={ { maxWidth: "400px" } } >

        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} /> 
            <Route path="/forgot-password" component={ForgotPassword} /> 
          </Switch>
        </Router>

      </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
