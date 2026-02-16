import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImageItem } from './Fotos.styled';

export const Fotos = ({ fotos }) => {
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
          <ImageItem src={foto} alt={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
