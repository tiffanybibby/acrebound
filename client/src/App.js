import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';

import {
  loginOwner,
  registerOwner,
  verifyOwner,
  removeToken,
} from './services/auth';

function App() {
  const [currentOwner, setCurrentOwner] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const ownerData = await verifyOwner();
      setCurrentOwner(ownerData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const ownerData = await loginOwner(loginData);
    setCurrentOwner(ownerData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const ownerData = await registerOwner(registerData);
    setCurrentOwner(ownerData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentOwner(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className='App'>
      <Layout currentOwner={currentOwner} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
