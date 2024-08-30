import { LayoutContentsWrap } from "./StyledLayout";

export interface ContentsProps {
  children?: React.ReactNode;
}

const LayoutContents: React.FC<ContentsProps> = ({ children }) => {
  return <LayoutContentsWrap>{children}</LayoutContentsWrap>;
};

export default LayoutContents;
