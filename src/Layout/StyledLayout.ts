import styled from "styled-components";

//contents
export const LayoutContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  box-sizing: border-box;
  min-height: calc(var(--vh, 1vh) * 100);
  min-width: 350px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.buttonOnPrimary};
`;
