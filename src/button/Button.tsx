import React, { useState, useContext } from "react";
import styled from "styled-components";
import BasicIcon from "../basicIcon/BasicIcon";
import { ThemeContext } from "styled-components";

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.color.grey20};
  border-radius: 50px;
`;

const ButtonList = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.grey20 : "none"};
  cursor: pointer;
`;

const LabelWrap = styled.span`
  color: ${(props) => props.theme.color.grey100};
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 600px) {
    display: none;
  }
`;

type ModeOption = {
  value: string;
  label: string;
};

type GuideButtonsProps = {
  labels: string[];
  options: ModeOption[];
  onSelectMode: (value: string) => void;
};

const GuideButtons: React.FC<GuideButtonsProps> = ({
  labels,
  options,
  onSelectMode,
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>("Light");
  const theme = useContext(ThemeContext);

  const handleClick = (label: string) => {
    const newActiveLabel = label === activeLabel ? null : label;
    setActiveLabel(newActiveLabel);
    const selectedOption = options.find((option) => option.label === label);
    onSelectMode(selectedOption ? selectedOption.value : "");
  };

  return (
    <ButtonWrap>
      {labels.map((label, index) => (
        <ButtonList
          key={index}
          $isActive={label === activeLabel}
          onClick={() => handleClick(label)}
        >
          <BasicIcon
            icon={label === "Light" ? "light" : "star"}
            size="medium"
            color={theme?.color.grey100}
            marginRight={10}
          />
          <LabelWrap>{label}</LabelWrap>
        </ButtonList>
      ))}
    </ButtonWrap>
  );
};

export default GuideButtons;
