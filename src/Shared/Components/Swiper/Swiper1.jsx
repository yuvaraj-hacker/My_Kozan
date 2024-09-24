import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




function Swiper1() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        centeredSlides: true,
                        spaceBetween: 10,
                    },
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                
                  delay:500,
                    disableOnInteraction: false,
                }}
                
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <img src="/assets/Images/Products/product-1.png" alt="product1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/Images/Products/product2.png" alt="product2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/Images/Products/product3.png" alt="product3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/Images/Products/product-1.png" alt="product1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/Images/Products/product2.png" alt="product2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/Images/Products/product3.png" alt="product3" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Swiper1;


