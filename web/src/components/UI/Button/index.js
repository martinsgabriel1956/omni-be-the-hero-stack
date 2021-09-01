import React from "react";

import { LinkContainer, ButtonContainer } from "./styles.js";

export function Button({ children, ...props }) {
  return (
    <>
      {props.to ? (
        <LinkContainer {...props}>{children}</LinkContainer>
      ) : (
        <ButtonContainer {...props}>{children}</ButtonContainer>
      )}
    </>
  );
}
