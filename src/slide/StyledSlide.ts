import styled from "styled-components";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

export interface SlideProps {
  children: ReactNode;
  showPagination?: boolean;
}

export const StyledSwiperWrap = styled.div`
  overflow: visible;
  position: relative;
`;

export const StyledSwiper = styled(SwiperComponent)`
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 2px 24px 0 rgba(55, 70, 108, 0.06);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.cardSurfaceContainerUltimate};

  .swiper-pagination {
    position: relative;
    margin-top: 16px;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.grey100};
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    margin: 0;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.color.grey100};
  }

  .swiper-pagination {
    position: absolute;
    bottom: 11px;
    margin: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) =>
      theme.color.primary || theme.color.grey100};
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  padding: 0;
`;
