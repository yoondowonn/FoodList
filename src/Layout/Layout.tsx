import { LayoutContentsWrap } from "./StyledLayout";

export interface ContentsProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ContentsProps> = ({ children }) => {
  return <LayoutContentsWrap>{children}</LayoutContentsWrap>;
};

export default Layout;
