import styled from "styled-components";
import IconClose from "/src/assets/images/icon-close.svg";
import searchIcon from "/src/assets/images/icon-head-search.svg";

export const InputWrap = styled.div`
  position: sticky;
  top: 90px;
  width: 100%;
  background-color: ${(props) => props.theme.color.bgSurface};
  overflow: hidden;
  z-index: 999;
  padding: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 70%;
  height: auto;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  font-size: 16px;
  width: 100%;
  padding: 10px 35px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.color.grey20};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.grey100};
  box-shadow: 0 4px 10px 0 #92949945;

  &:focus {
    outline: none;
    border: 1px solid
      ${({ theme, readOnly }) =>
        readOnly ? theme.color.grey20 : theme.color.grey100};
  }
`;

export const Icon = styled.button`
  position: absolute;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;

export const ClearButton = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.color.grey20};
  mask: url(${IconClose});
  -webkit-mask: url(${IconClose});
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
`;

export const SearchButton = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.grey100};
  mask: url(${searchIcon});
  -webkit-mask: url(${searchIcon});
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
`;
