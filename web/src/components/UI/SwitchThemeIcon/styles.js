import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.changeTheme && localStorage.getItem('theme') === "dark" ? "#000" : "#e02041"};
  border: 1px solid
    ${(props) => (props.changeTheme && localStorage.getItem('theme') === "dark" ? "#000" : "#e02041")};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  position: absolute;
  top: 78vh;
  left: 84vw;

  &:hover {
    filter: brightness(94%);
  }
`;
