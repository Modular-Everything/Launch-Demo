import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import styles from './Carousel.module.css';

// 


const Carousel = ({ slides, spaceBetween, slidesPerView, pagination, navigation, loop, className }) => {
  if(!slides) return null;
  
  SwiperCore.use([Navigation, Pagination, A11y]);

  return (
    <Swiper
      className={[styles.carousel, className].join(' ')}
      tag="ul"
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      loop={loop}
    >
      {slides.map((slide) => <SwiperSlide tag="li"><img src={slide} alt="" /></SwiperSlide>)}
    </Swiper>
  )
}

export default Carousel

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.number,
  pagination: PropTypes.bool,
  navigation: PropTypes.bool,
  loop: PropTypes.bool,
}

Carousel.defaultProps = {
  spaceBetween: 0,
  slidesPerView: 1,
  pagination: false,
  navigation: false,
  loop: true,
}