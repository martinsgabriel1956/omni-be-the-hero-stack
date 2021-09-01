import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global.js";

import theme from "./utils/theme";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

import { SwitchThemeIcon } from "./components/UI/SwitchThemeIcon";

const themes = {
  light: theme.LightTheme,
  dark: theme.DarkTheme,
};

export function Routes() {
  const [themeName, setThemeName] = useState("light");

  return (
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyle theme={themeName} />
      <SwitchThemeIcon theme={themeName} setTheme={setThemeName} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Logon theme={themeName} />
          </Route>
          <Route path="/register">
            <Register theme={themeName} />
          </Route>
          <Route path="/profile">
            <Profile theme={themeName} />
          </Route>
          <Route path="/incidents/new">
            <NewIncident theme={themeName} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
