import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  min-width: 350px;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 999;
`;

export const PageTitle = styled.h1`
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-left: 24px;
`;

export const MenuButton = styled.button`
  width: auto;
  height: auto;
`;
