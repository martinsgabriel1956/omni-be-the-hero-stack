import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
      background-color: ${props => props.changeTheme && localStorage.getItem('theme') === 'dark' ? `#dcdce6` : 'transparent'};
      margin-left: 16px;
      transition: border-color 0.4s;
      
      &:hover {
        border-color: ${props => props.changeTheme === 'dark' ? `#dcdce6` : '#999'};
        background-color: ${props => props.changeTheme && localStorage.getItem('theme') === 'dark' ? `transparent` : ''};
        
      }
    }
  }
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      box-shadow: ${props => props.changeTheme && localStorage.getItem('theme') === 'dark' ? 'rgba(125, 125, 125, 0.7)' : 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;

        background-color: transparent;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;
