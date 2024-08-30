import styled, { css } from "styled-components";
import IconMenu from "../assets/images/icon-menu-24px.svg";

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
  background: url(${(props) => icons[props.$icon]}) center center no-repeat;
  background-size: cover;
  ${({ $size }) => sizeStyles[$size]};
  margin-right: ${(props) => props.$marginRight}px;
  margin-left: ${(props) => props.$marginLeft}px;
  color: ${(props) => props.$color || "inherit"}; color
  background-image: ${(props) =>
    icons[props.$icon] ? `url(${icons[props.$icon]})` : "none"};
`;
