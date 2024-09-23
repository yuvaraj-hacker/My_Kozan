import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper1 from '../Swiper/Swiper1';
import Swiper2 from '../Swiper/Swiper2';
import Swiper3 from '../Swiper/Swiper3';
function Home() {
  return (
    <>
      <section className="mx-auto max-w-[70rem] px-5 my-10">
        <div className="grid grid-cols-2  text-white lg:gap-0 gap-2  lg:p-4 p-2 rounded-xl bg-[#E38734]">
          <div className="flex justify-center items-center">
            <div>
              <span className="md:text-5xl">
                Boost Your <br />
                Store's Success <br />
              </span>
              <span className="md:text-3xl text-sm font-semibold">
                with our handpicked, <br />{" "}
              </span>
              <span className="md:text-3xl text-sm font-bold">High Profit Products !</span>
              <div className=' lg:mt-0  mt-4'>
                <button className='bg-black text-white font-semibold   lg:px-4 lg:py-3   p-2 lg:text-base text-sm rounded-lg lg:mt-10 hover:scale-105 duration-200'>
                  Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='grid grid-cols-3 lg:gap-0 gap-3'>
              <div className='flex justify-center '>
                <div className='lg:space-y-10  space-y-3'>
                  <img className='' src="/Images/image1.png" alt="" />
                  <img src="/Images/image4.png" alt="" />
                </div>
              </div>
              <div className='flex justify-center'>
                <img src="/Images/image2.png" alt="" />
              </div>
              <div className='flex justify-center'>
                <div className='lg:space-y-10 space-y-3 '>
                  <img src="/Images/image3.png" alt="" />
                  <img src="/Images/image5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#D5ED9F] '>
        <div className='mx-auto max-w-[60rem] text-center py-10 lg:px-0 px-5'>
          <h1 className='font-semibold md:text-3xl text-xl mb-5'>Welcome to MyKozan LLC | A Wholesale Company</h1>
          <p className=" md:text-xl text-sm ">
            We launched our online business with the goal of bringing high-profitable products to your
            Stores. With our team of market researchers, we have made it easier for you to bring
            high-profit items to your Store. The products we bring to you are unique, and guaranteed
            to bring high profits to your store.
          </p>
        </div>
      </section>
      <section className='my-10'>
        <h1 className='text-center md:text-3xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg ' >Products</h1>
        <section className='grid lg:grid-cols-1 grid-cols-2 gap-2 lf:mx-0 mx-2 '>
          <section className='mx-auto lg:max-w-[70rem] max-w-[20rem] md:px-5 '>
            <div className='bg-[#00712D]  grid lg:grid-cols-5  grid-cols-1 lg:gap-0 gap-5  py-5 rounded-lg my-5 '>
              <div className=' px-5 lg:col-span-1 col-span-4  lg:order-first order-last   flex justify-center items-center mx-auto'>
                <div className=' '>
                  <p className="text-white md:text-xl text-sm">Reusable Wooden
                    Money Box with
                    Counter...</p>
                  <p className="text-white mt-2"> <span className='md:text-lg text-base  font-bold' >$5.99 </span>
                    (Min. 50 Pcs)</p>
                  <button className='bg-[#E38734] px-5 py-2 rounded-lg lg:text-xl text-sm mt-2 font-semibold  hover:scale-105 duration-200'>Buy now</button>
                </div>
              </div>
              <div className='flex justify-center w-full flex-wrap   lg:px-0  px-5 col-span-4 '>
                <Swiper1/>
              </div>
            </div>
          </section>
          <section className='mx-auto lg:max-w-[70rem] max-w-[20rem] md:px-5'>
            <div className='bg-[#FFF3C1] grid lg:grid-cols-5   grid-cols-1 lg:gap-0 gap-5  py-5 rounded-lg my-5 '>
              <div className='flex justify-center w-full flex-wrap  col-span-4 lg:px-10 px-5 gap-5 '>
                <Swiper2/>
              </div>
              <div className=' px-5  lg:col-span-1 col-span-4 flex justify-center items-center'>
                <div className='text-[#00712D]'>
                  <p className="md:text-xl text-sm">E-Writing Doodle
                    Board for
                    Kids...</p>
                  <p className="md:mt-2  mt-7 "> <span className='md:text-lg text-base  font-bold ' >$8.99 </span>
                    (Min. 50 Pcs)</p>
                  <button className='bg-[#E38734] px-5 py-2 rounded-lg lg:text-xl mt-2 text-sm  font-semibold text-black  hover:scale-105 duration-200 '>Buy now</button>
                </div>
              </div>
            </div>
          </section>
          <section className='mx-auto lg:max-w-[70rem] max-w-[20rem] md:px-5  '>
            <div className='bg-[#00712D]  grid lg:grid-cols-5 py-5  grid-cols-1 lg:gap-0 gap-3   rounded-lg lg:my-5 '>
              <div className=' px-3  col-span-4  lg:col-span-1  lg:order-first order-last flex justify-center items-center'>
                <div className=''>
                  <p className="text-white md:text-xl text-sm">Selfie Stick</p>
                  <p className="text-white  mt-2"> <span className='md:text-lg text-base font-bold' >$5.99 </span>
                    (Min. 50 Pcs)</p>
                  <button className='bg-[#E38734] md:px-5 px-5 py-2 rounded-lg lg:text-xl mt-2 font-semibold text-sm hover:scale-105 duration-200'>Buy now</button>
                </div>
              </div>
              <div className='flex justify-center items-center lg:w-full flex-wrap  col-span-4 lg:px-0 px-5 md:py-0   gap-5 '>
                <Swiper3/>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
export default Home
