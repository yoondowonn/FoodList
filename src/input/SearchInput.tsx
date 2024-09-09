import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  InputWrap,
  Input,
  ClearButton,
  InputContainer,
  SearchButton,
} from "./StyledInput";

interface SearchInputProps {
  currentInput: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  currentInput,
  handleSearchChange,
  handleKeyDown,
}) => {
  const [inputValue, setInputValue] = useState(currentInput);

  const handleClear = () => {
    setInputValue("");
    handleSearchChange({
      target: { value: "" },
    } as ChangeEvent<HTMLInputElement>);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleSearchChange(event);
  };

  return (
    <InputWrap>
      <InputContainer>
        <SearchButton aria-hidden="true" />
        <Input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for a food!"
        />
        {inputValue && <ClearButton onClick={handleClear} />}
      </InputContainer>
    </InputWrap>
  );
};

export default SearchInput;
