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
  justify-content: space-between;

  @media (max-width: 425px) {
    &,
    .back-link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export const Form = styled(motion.section)`
  width: 100%;
  max-width: 350px;
  margin-right: 1.88rem;

  @media (max-width: 425px) {
      margin: 0 1em 2em;
    }
  
  form {
    margin-top: 6.25rem;
    
    @media (max-width: 425px) {
      margin-top: 4rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    input {
      &:focus {
        border: 2px solid #e02041;
      }
    }
    @media (max-width: 425px) {
      margin-right: auto;
    }
  }
`;

export const HeroImg = styled(motion.img)`
  @media (max-width: 425px) {
    display: none;
  }
`;
