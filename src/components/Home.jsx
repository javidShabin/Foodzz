
import { slide1, slide2, slide3 } from "../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home() {
    
  return (
    <>
      <Swiper
        spaceBetween={20}
        breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
            
          }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          ioop: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
              <img src={slide1} alt="Banner images" className="slide-img"/>
        </SwiperSlide>
        <SwiperSlide>
              <img src={slide2} alt="Banner images" className="slide-img"/>
        </SwiperSlide>
        <SwiperSlide>
              <img src={slide3} alt="Banner images" className="slide-img"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
