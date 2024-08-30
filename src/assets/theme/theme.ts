import { DefaultTheme } from "styled-components";
import { height, width, zIndex } from "./commonTheme";
import { colorLight } from "./LightTheme";
import { colorDark } from "./DarkTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    height: typeof height;
    width: typeof width;
    zIndex: typeof zIndex;
    color: typeof colorLight | typeof colorDark;
  }
}

export const themeLight: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorLight,
};

export const themeDark: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorDark,
};

const theme: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorLight,
};

export default theme;
