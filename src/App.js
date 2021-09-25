import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import MainPage from "./Components/MainPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./Components/Page404.js";
import CoursePage from "./Components/CoursePage.js";
import Footer from "./Components/Footer.js";
import FullCoursePage from "./Components/FullCoursePage.js";

function App() {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    <AppContainer>
      {spinner ? (
        <AppSpinner>
          <ScaleLoader loading={spinner} size={150} />
        </AppSpinner>
      ) : (
        <Router>
          <AppHeader>
            <Header />
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/pager" component={Page404} />
              <Route path="/course-page" component={FullCoursePage} />
              <Route path="/course/:id" component={CoursePage} />
            </Switch>
            <Footer />
          </AppHeader>
        </Router>
      )}
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  height: 100%;
  background-color: #ededed;
`;

export const AppSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #888888;
`;

export const AppHeader = styled.div`
  transition: all 0.2s ease;
`;

export default App;
