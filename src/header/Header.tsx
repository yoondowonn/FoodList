import { HeaderContainer, PageTitle, MenuButton } from "./StyledHeader";
import BasicIcon from "../basicIcon/BasicIcon";
import { useMenu } from "../fullMenu/MenuContext";

export interface Recipes {
  title?: string;
}

const Header: React.FC<Recipes> = ({ title }) => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <HeaderContainer>
      <PageTitle>{title}</PageTitle>
      <MenuButton
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <BasicIcon icon="menu" size="extraLarge" />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
