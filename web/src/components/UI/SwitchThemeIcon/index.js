import React from "react";
import { MdPets } from "react-icons/md";

import { Container } from "./styles";

export function SwitchThemeIcon(props) {
  localStorage.getItem("theme");

  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }

    if (props.theme === "dark") {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <Container onClick={changeTheme} changeTheme={props.theme}>
      <MdPets size={46} color="white" />
    </Container>
  );
}
