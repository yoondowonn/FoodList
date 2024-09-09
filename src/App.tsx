import { useEffect } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "./fullMenu/MenuContext";
import { useModeStore } from "./store/ModeStore";
import { themeDark, themeLight } from "./assets/theme/theme";
import { useParams } from "react-router-dom";
import { ServiceType } from "./type/ServiceType";
import GlobalStyle from "./assets/globalStyle";
import Header from "header/Header";
import Layout from "layout/Layout";
import FullMenu from "fullMenu/FullMenu";
import SearchContainer from "searchContainer/searchContainer";

const App = () => {
  const { mode } = useParams<{ mode?: ServiceType }>();
  const type = useModeStore((state: any) => state.type as ServiceType);
  const setModeType = useModeStore((state: any) => state.setModeType);

  useEffect(() => {
    if (mode) {
      setModeType(mode);
    }
  }, [mode, setModeType]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={type === ServiceType.Dark ? themeDark : themeLight}>
        <MenuProvider>
          <Layout>
            <GlobalStyle />
            <Header title="Recipes" />
            <FullMenu />
            <Routes>
              <Route path="/" element={<Navigate replace to="/recipes" />} />
              <Route path="/recipes" element={<SearchContainer />} />
              <Route path="/user" element={<SearchContainer />} />
            </Routes>
          </Layout>
        </MenuProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
