import styled from "styled-components";

export const Container = styled.div<{ $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.$isMenuOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.$isMenuOpen ? "auto" : "none")};
  transition: opacity 0.4s ease;
  z-index: ${({ theme }) => theme.zIndex.menu};
`;

export const MenuContainer = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 340px;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.cardSurfaceContainer};
  transform: ${(props) =>
    props.$isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.menu};
`;

export const MenuWrap = styled.div<{ $isMenuOpen: boolean }>`
  flex: 1;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.grey100};
  background-size: contain;
  mask: url(/public/icon-fullmenu-back.svg) no-repeat;
  -webkit-mask: url(/public/icon-fullmenu-back.svg);
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 24px;
`;

export const ChargeText = styled.strong`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.color.grey100};
`;

export const ManagementMenu = styled.div`
  padding: 0 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey100};
  padding: 15px 0;
  box-sizing: border-box;
  cursor: pointer;
`;

export const BasicHr = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.color.borderLineWhite};
  margin: 20px 0 32px 0;
`;
