import styled from "styled-components";
import { motion } from "framer-motion";

import theme from "../../../utils/theme";

export const Container = styled(motion.div)`
  width: 100%;
  padding: 96px;
  background: ${(props) =>
    props.changeTheme && localStorage.getItem("theme") === "dark"
      ? "#444"
      : `${theme.LightTheme.bgColor}`};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 450px;

    input,
    textarea {
      margin-top: 8px;
    }

    input {
      &:focus {
        border: 2px solid #e02041;
      }
    }

    textarea {
      resize: none;
      height: 200px;
      &:focus {
        border: 2px solid #e02041;
      }
    }

    .input-group {
      display: flex;

      input + input {
        margin-left: 8px;
      }

      input {
        &:nth-child(1) {
          text-transform: capitalize;
        }
        &:nth-child(2) {
          text-transform: uppercase;
        }
      }
    }
  }
`;
