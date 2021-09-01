import React from "react";

import { Container, OverLay } from "./styles.js";

export function MyModal({ isOpen, onRequestClose, children, ...props }) {
  return (
    <>
      {isOpen && (
        <OverLay changeTheme={props.changeTheme}
        >
          <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            overlayClassName={"modal-overlay"}
            {...props}
          >
            {children}
          </Container>
        </OverLay>
      )}
    </>
  );
}
