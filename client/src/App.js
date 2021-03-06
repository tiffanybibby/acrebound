import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";

import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
// import Home from "./screens/Home/Home";
import MainContainer from "./containers/MainContainer";

import {
  loginOwner,
  registerOwner,
  verifyOwner,
  removeToken,
} from "./services/auth";
// import PropertyContainer from "./containers/PropertyContainer";
// import UnitContainer from "./containers/UnitContainer";

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
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    // try {
    // if (password === passwordConfirmation) {
    const ownerData = await registerOwner(registerData);
    setCurrentOwner(ownerData);
    history.push("/");
  };
  //   else {
  //     throw new Error("Register Details Invalid");
  //   };
  // }
  // catch (error) {
  //   console.error(error);
  //   setForm({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     passwordConfirmation: "",
  //     isError: true,
  //     errorMsg: "Register Details Invalid!",
  //   });
  // }
  // }

  const handleLogout = () => {
    setCurrentOwner(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentOwner={currentOwner} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
        </Switch>
        <Route path="/">
          {/* <Home currentOwner={currentOwner} /> */}
          {/* <PropertyContainer currentOwner={currentOwner} /> */}
          {/* <UnitContainer currentOwner={currentOwner} /> */}
          <MainContainer currentOwner={currentOwner} />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
