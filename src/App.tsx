import React, { useState } from "react";
import GlobalStyle from "./assets/globalStyle";
import Header from "header/Header";
import RecipesContainer from "./recipes/RecipesContainer";
import Layout from "Layout/Layout";
import SearchInput from "input/SearchInput";

const App = () => {
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
    <Layout>
      <GlobalStyle />
      <Header title="Recipes" />
      <SearchInput
        currentInput={currentInput}
        handleSearchChange={handleSearchChange}
        handleKeyDown={handleKeyDown}
      />
      <RecipesContainer searchQuery={searchQuery} />
      <div style={{ height: "1000px" }}></div>
    </Layout>
  );
};

export default App;
