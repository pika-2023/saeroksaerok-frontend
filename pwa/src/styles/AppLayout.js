import React from "react";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 임시 코드 */
  width: 390px;
  height: 844px;
  background: white;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;
