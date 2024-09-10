import styled from "styled-components";

export interface KeyValueProps {
  keyLabel: string;
  className?: string;
  value: React.ReactNode;
  textAlign?: "left" | "center" | "right";
}

export const StyledKeyValue = styled.div<{
  $textAlign?: "left" | "center" | "right";
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.cardSurfaceContainerUltimate};
  border: 1px solid ${({ theme }) => theme.color.cardSurfaceContainer};
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;

  .key {
    width: 50%;
    font-weight: bold;
    color: ${({ theme }) => theme.color.grey100};
  }

  .value {
    text-align: ${({ $textAlign }) => $textAlign || "left"};
    width: 50%;
    color: ${({ theme }) => theme.color.grey100};
  }
`;
