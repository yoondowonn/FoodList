import { useModeStore } from "store/ModeStore";
import React, { useContext } from "react";
import {
  HeaderContainer,
  PageTitle,
  MenuButton,
  ModeWrap,
  HeaderItem,
} from "./StyledHeader";
import BasicIcon from "../basicIcon/BasicIcon";
import { useMenu } from "../fullMenu/MenuContext";
import { ServiceType } from "type/ServiceType";
import Button from "button/Button";
import { ThemeContext } from "styled-components";

export interface Recipes {
  title?: string;
}

const Header: React.FC<Recipes> = ({ title }) => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const theme = useContext(ThemeContext);

  const setModeType = useModeStore((state: any) => state.setModeType);

  const modeOptions = [
    { value: ServiceType.Light, label: "Light" },
    { value: ServiceType.Dark, label: "Dark" },
  ];

  return (
    <HeaderContainer>
      <HeaderItem>
        <ModeWrap>
          <Button options={modeOptions} onSelectMode={setModeType} />
        </ModeWrap>
      </HeaderItem>

      <HeaderItem>
        <PageTitle>{title}</PageTitle>
      </HeaderItem>

      <HeaderItem>
        <MenuButton
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <BasicIcon
            icon="menu"
            size="extraLarge"
            color={theme?.color.grey100}
          />
        </MenuButton>
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
