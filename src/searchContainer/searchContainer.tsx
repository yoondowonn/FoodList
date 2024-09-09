import React, { useState } from "react";
import SearchInput from "input/SearchInput";
import RecipesContainer from "recipes/RecipesContainer";

const SearchContainer = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery(currentInput);
    }
  };

  return (
    <>
      <SearchInput
        currentInput={currentInput}
        handleSearchChange={handleSearchChange}
        handleKeyDown={handleKeyDown}
      />
      <RecipesContainer searchQuery={searchQuery} />
    </>
  );
};

export default SearchContainer;
