import styled, { css, DefaultTheme } from "styled-components";
import IconMenu from "/icon-menu-24px.svg";
import IconUser from "/icon-user-24px.svg";
import IconHome from "/icon-home-24px.svg";
import IconStar from "/icon-star.svg";
import IconLight from "/icon-light.svg";

type IconSize =
  | "extraLarge"
  | "large"
  | "base"
  | "medium"
  | "small"
  | "mini"
  | "smallRegular"
  | "tiny";

interface BasicIconProps {
  icon: string;
  color?: string;
  size?: IconSize;
  marginRight?: string | number;
  marginLeft?: string | number;
}

export default function BasicIcon({
  icon,
  color,
  size = "base",
  marginRight = 0,
  marginLeft = 0,
}: BasicIconProps) {
  return (
    <StyledIcon
      $icon={icon}
      $color={color}
      $size={size}
      $marginRight={marginRight}
      $marginLeft={marginLeft}
    />
  );
}

const icons: Record<string, string> = {
  menu: IconMenu,
  user: IconUser,
  home: IconHome,
  star: IconStar,
  light: IconLight,
};

const sizeStyles: Record<IconSize, ReturnType<typeof css>> = {
  extraLarge: css`
    width: 32px;
    height: 32px;
  `,
  large: css`
    width: 24px;
    height: 24px;
  `,
  base: css`
    width: 20px;
    height: 20px;
  `,
  medium: css`
    width: 18px;
    height: 18px;
  `,
  small: css`
    width: 16px;
    height: 16px;
  `,
  smallRegular: css`
    width: 14px;
    height: 14px;
  `,
  mini: css`
    width: 12px;
    height: 12px;
  `,
  tiny: css`
    width: 10px;
    height: 10px;
  `,
};

const StyledIcon = styled.span<{
  $icon: string;
  $color?: string;
  $size: IconSize;
  $marginRight: string | number;
  $marginLeft: string | number;
}>`
  display: inline-block;
  vertical-align: middle;
  ${({ $size }) => sizeStyles[$size]};
  margin-right: ${(props) => `${props.$marginRight}px`};
  margin-left: ${(props) => `${props.$marginLeft}px`};
  ${({
    $icon,
    $color,
    theme,
  }: {
    $icon: string;
    $color?: string;
    theme: DefaultTheme;
  }) => {
    const themedIcon = (theme.icons && theme.icons[$icon]) || icons[$icon];
    return $color
      ? css`
          background-color: ${$color};
          mask: url(${themedIcon});
          -webkit-mask: url(${themedIcon});
          mask-repeat: no-repeat;
          mask-position: center center;
          mask-size: cover;
        `
      : css`
          background: url(${themedIcon}) center center no-repeat;
          background-size: cover;
        `;
  }}
`;
