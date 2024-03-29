import styled from "styled-components";
import { motion } from "framer-motion";

import theme from "../../utils/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }
`;

export const Content = styled(motion.div)`
  width: 100%;
  padding: 96px;
  background: ${props => props.changeTheme && localStorage.getItem('theme') === 'dark' ? '#444' : `${theme.LightTheme.bgColor}`};
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

    input {
      margin-top: 8px;

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

  @media (max-width: 425px) {
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: transparent;
    box-shadow: none;

    .back-link {
      display: none;
    }

    section {
      h1,
      p {
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: 20px;
        margin-top: 10px;
      }

      img {
        margin-top: 24px;
        width: 84px;
      }

      p {
        line-height: 24px;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`;
