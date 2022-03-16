import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./_app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
