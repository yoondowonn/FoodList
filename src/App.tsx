import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "./fullMenu/MenuContext";
import { useModeStore } from "./store/ModeStore";
import { themeDark, themeLight } from "./assets/theme/theme";
import { useParams } from "react-router-dom";
import { ServiceType } from "./type/ServiceType";
import GlobalStyle from "./assets/globalStyle";
import Header from "header/Header";
import RecipesContainer from "./recipes/RecipesContainer";
import Layout from "layout/Layout";
import SearchInput from "input/SearchInput";
import FullMenu from "fullMenu/FullMenu";

const App = () => {
  const { mode } = useParams<{ mode?: ServiceType }>();
  const type = useModeStore((state: any) => state.type as ServiceType);
  const setModeType = useModeStore((state: any) => state.setModeType);

  useEffect(() => {
    if (mode) {
      setModeType(mode);
    }
  }, [mode, setModeType]);

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
    <ThemeProvider theme={type === ServiceType.Dark ? themeDark : themeLight}>
      <MenuProvider>
        <Layout>
          <GlobalStyle />
          <Header title="Recipes" />
          <FullMenu />
          <SearchInput
            currentInput={currentInput}
            handleSearchChange={handleSearchChange}
            handleKeyDown={handleKeyDown}
          />

          <RecipesContainer searchQuery={searchQuery} />
        </Layout>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
