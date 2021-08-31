import React from "react";

import { GlobalStyle } from "./styles/global.js";

import { Routes } from "./routes";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />;
    </>
  );
}
