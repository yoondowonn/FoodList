import { DefaultTheme } from "styled-components";
import { height, width, zIndex, border } from "./commonTheme";
import { colorLight } from "./LightTheme";
import { colorDark } from "./DarkTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: typeof colorLight;
  }
}

export const themeLight: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorLight,
  border,
};

export const themeDark: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorDark,
  border,
};

const theme: DefaultTheme = {
  height,
  width,
  zIndex,
  color: colorLight,
};

export default theme;
