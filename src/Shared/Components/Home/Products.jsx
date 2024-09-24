import React from 'react'
import Swiper2 from '../Swiper/Swiper2'
import Swiper1 from '../Swiper/Swiper1'
import Swiper3 from '../Swiper/Swiper3'
import { Link } from 'react-router-dom'
function Products() {
    return (
        <>
            <section className='my-10'>
                <h1 className='text-center md:text-3xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg ' >Products</h1>
                <section className='grid lg:grid-cols-1 grid-cols-2 gap-2 lg:mx-0 mx-2 '>
                    <section className='mx-auto lg:max-w-[70rem] max-w-[20rem] md:px-5 '>
                        <div className='bg-[#00712D]  grid lg:grid-cols-5  grid-cols-1 lg:gap-0 gap-5  py-5 rounded-lg my-5 '>
                            <div className=' px-5 lg:col-span-1 col-span-4  lg:order-first order-last   flex justify-center items-center mx-auto'>
                                <div className=' '>
                                    <p className="text-white md:text-xl text-sm">Reusable Wooden
                                        Money Box with
                                        Counter...</p>
                                    <p className="text-white mt-2"> <span className='md:text-lg text-base  font-bold' >$5.99 </span>
                                        (Min. 50 Pcs)</p>
                                    <Link to='/product'>

                                        <button className='bg-[#E38734] px-5 py-2 rounded-lg lg:text-xl text-sm mt-2 font-semibold  hover:scale-105 duration-200'>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-center w-full flex-wrap   lg:px-0     px-5 col-span-4 '>
                                <Swiper1 />
                            </div>
                        </div>
                    </section>
                    <section className='mx-auto lg:max-w-[70rem] max-w-[20rem] md:px-5'>
                        <div className='bg-[#FFF3C1] grid lg:grid-cols-5   grid-cols-1 lg:gap-0 gap-5  py-5 rounded-lg my-5 '>
                            <div className='flex justify-center w-full flex-wrap  col-span-4 lg:px-10 px-5 gap-5 '>
                                <Swiper2 />
                            </div>
                            <div className=' px-5  lg:col-span-1 col-span-4 flex justify-center items-center'>
                                <div className='text-[#00712D]'>
                                    <p className="md:text-xl text-sm">E-Writing Doodle
                                        Board for
                                        Kids...</p>
                                    <p className="md:mt-2  mt-7 "> <span className='md:text-lg text-base  font-bold ' >$8.99 </span>
                                        (Min. 50 Pcs)</p>
                                    <Link to='/product'>
                                        <button className='bg-[#E38734] px-5 py-2 rounded-lg lg:text-xl mt-2 text-sm  font-semibold text-black  hover:scale-105 duration-200 '>Buy Now</button>
                                    </Link>
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
                                    <Link to='/product'>
                                        <button className='bg-[#E38734] md:px-5 px-5 py-2 rounded-lg lg:text-xl mt-2 font-semibold text-sm hover:scale-105 duration-200'>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-center items-center lg:w-full flex-wrap  col-span-4 lg:px-0 px-5 md:py-0   gap-5 '>
                                <Swiper3 />
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
export default Products
