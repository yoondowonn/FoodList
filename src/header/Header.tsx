import { HeaderContainer, PageTitle } from "./StyledHeader";

export interface Recipes {
  title?: string;
}

const Header: React.FC<Recipes> = ({ title }) => {
  return (
    <HeaderContainer>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
};

export default Header;
