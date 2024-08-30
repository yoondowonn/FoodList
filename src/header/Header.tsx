import { HeaderContainer, PageTitle, MenuButton } from "./StyledHeader";
import BasicIcon from "../basicIcon/BasicIcon";

export interface Recipes {
  title?: string;
}

const Header: React.FC<Recipes> = ({ title }) => {
  return (
    <HeaderContainer>
      <PageTitle>{title}</PageTitle>
      <MenuButton type="button">
        <BasicIcon icon="menu" size="extraLarge" />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
