import React, { useContext } from "react";
import {
  Container,
  CloseButton,
  MenuWrap,
  MenuItem,
  MenuHeader,
  ChargeText,
  ManagementMenu,
  MenuContainer,
  BasicHr,
} from "./StyledFullMenu";
import BasicIcon from "basicIcon/BasicIcon";
import { ThemeContext } from "styled-components";
import { useMenu } from "../fullMenu/MenuContext";

const FullMenu: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { isMenuOpen, isVisible, toggleMenu } = useMenu();

  if (!isVisible) return null;

  return (
    <>
      <Container $isMenuOpen={isMenuOpen}>
        <MenuContainer $isMenuOpen={isMenuOpen}>
          <MenuWrap $isMenuOpen={isMenuOpen}>
            <MenuHeader>
              <ChargeText>Menu</ChargeText>
              <CloseButton onClick={toggleMenu} />
            </MenuHeader>

            <BasicHr />

            <ManagementMenu>
              <a href="/recipes">
                <MenuItem onClick={() => {}}>
                  <BasicIcon
                    icon="home"
                    size="large"
                    marginRight={16}
                    color={theme?.color.grey100}
                  />
                  <span>Recipes</span>
                </MenuItem>
              </a>
              <a href="/user">
                <MenuItem onClick={() => {}}>
                  <BasicIcon
                    icon="user"
                    size="large"
                    marginRight={16}
                    color={theme?.color.grey100}
                  />
                  <span>user</span>
                </MenuItem>
              </a>
            </ManagementMenu>
          </MenuWrap>
        </MenuContainer>
      </Container>
    </>
  );
};

export default FullMenu;
