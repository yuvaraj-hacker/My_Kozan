import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import HeroSection from '../../Shared/Components/Home/HeroSection';
import Products from '../../Shared/Components/Home/Products';
import About from '../../Shared/Components/Home/About';
function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Products />


    </>
  )
}
export default Home
