import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useBrandStore } from "./store/brandStore";
import { themeDark, themeLight } from "./assets/theme/theme";
import { useParams } from "react-router-dom";
import { ServiceType } from "./type/ServiceType";
import GlobalStyle from "./assets/globalStyle";
import Header from "header/Header";
import RecipesContainer from "./recipes/RecipesContainer";
import Layout from "Layout/Layout";
import SearchInput from "input/SearchInput";

const App = () => {
  const { brand } = useParams<{ brand?: ServiceType }>();
  const type = useBrandStore((state: any) => state.type as ServiceType);
  const setBrandType = useBrandStore((state: any) => state.setBrandType);

  useEffect(() => {
    if (brand) {
      setBrandType(brand);
    }
  }, [brand, setBrandType]);

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
      <ThemeProvider theme={type === ServiceType.Dark ? themeDark : themeLight}>
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
      </ThemeProvider>
    </>
  );
};

export default App;
