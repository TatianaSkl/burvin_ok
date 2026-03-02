import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArticleLabel, ImageItem, ImageWrapper } from './Fotos.styled';

export const Fotos = ({ article, fotos }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      grabCursor={true}
      navigation
      pagination={{ clickable: true }}
    >
      {fotos.map((foto, idx) => (
        <SwiperSlide key={idx}>
          <ImageWrapper>
            <ImageItem src={foto} alt={idx} />
            <ArticleLabel>{article}</ArticleLabel>
          </ImageWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
