import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FunctionComponent,
} from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  isVisible: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  isVisible: false,
  toggleMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: FunctionComponent<MenuProviderProps> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsVisible(false), 400);
    } else {
      setIsVisible(true);
      setTimeout(() => setIsMenuOpen(true), 0);
    }
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, isVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
