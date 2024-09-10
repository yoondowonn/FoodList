import React, { useState, useEffect } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import {
  SlideProps,
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperWrap,
} from "./StyledSlide";

const Slide: React.FC<SlideProps> = ({ children, showPagination = true }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [swiperInstance]);

  const swiperParams = {
    modules: [Pagination],
    onSwiper: setSwiperInstance,
    spaceBetween: 10,
    loop: false,
    pagination: showPagination ? { clickable: true } : undefined,
  };

  return (
    <StyledSwiperWrap>
      <StyledSwiper {...swiperParams}>
        {React.Children.map(children, (child, index) => (
          <StyledSwiperSlide key={index}>{child}</StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSwiperWrap>
  );
};

export default Slide;
