import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  min-width: 350px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 999;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
