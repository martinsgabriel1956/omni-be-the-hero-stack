import styled from "styled-components";

import Modal from "react-modal";
import theme from "../../../utils/theme";

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.changeTheme && localStorage.getItem("theme") === "dark"
      ? "rgba(255, 255, 255, 0.6)"
      : "rgba(0, 0, 0, 0.8)"};
`;

export const Container = styled(Modal)`
  position: absolute;
  top: 400px;
  left: 820px;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);

  width: 40%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) =>
    props.changeTheme && localStorage.getItem("theme") === "dark"
      ? "#333"
      : "#f5f5f5"};
  border-radius: 10px;

  .modal-close-btn {
    position: absolute;
    top: 20px;
    right: 24px;

    background-color: ${(props) => (props.changeTheme ? "#e02041" : "#737380")};
    border: 1px solid ${(props) => (props.changeTheme ? "#e02041" : "#737380")};
    padding: 0.2em 0.5em;
    border-radius: 0.15em;

    font-size: 1.75em;
    color: ${(props) => (props.changeTheme ? "#333" : "#f5f5f5")};
    transition: all 0.5s;

    &:hover {
      color: ${(props) => (props.changeTheme ? "#f5f5f5" : " #e02041")};
    }
  }

  .modal-accept-btn {
    margin-top: 2em;

    background-color: #e02041;
    border: 1px solid #e02041;
    padding: 0.75em 2.25em;
    border-radius: 0.2em;
    color: #f5f5f5;
    font-weight: bold;
  }

  .id {
    margin-top: 1em;
    font-size: 2.5em;
    color: #e02041;
  }
`;
