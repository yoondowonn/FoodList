import { ChangeEvent, KeyboardEvent } from "react";
import { InputWrap, Input } from "./StyledInput";

interface SearchInputProps {
  currentInput: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  currentInput,
  handleSearchChange,
  handleKeyDown,
}: SearchInputProps) => {
  return (
    <InputWrap>
      <Input
        type="text"
        value={currentInput}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a food! ex) salad, coke ..."
      />
    </InputWrap>
  );
};

export default SearchInput;
