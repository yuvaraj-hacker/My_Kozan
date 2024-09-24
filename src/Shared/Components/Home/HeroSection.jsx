import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
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
                                <Link to='/products'>

                                    <button className='bg-black text-white font-semibold   lg:px-4 lg:py-3   p-2 lg:text-base text-sm rounded-lg lg:mt-10 hover:scale-105 duration-200'>
                                        Shop now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='grid grid-cols-3 lg:gap-0 gap-3'>
                            <div className='flex justify-center '>
                                <div className='lg:space-y-10  space-y-3'>
                                    <img className='' src="/assets/Images/HeroSection/image1.png" alt="" />
                                    <img src="/assets/Images/HeroSection/image4.png" alt="" />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <img src="/assets/Images/HeroSection/image2.png" alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <div className='lg:space-y-10 space-y-3 '>
                                    <img src="/assets/Images/HeroSection/image3.png" alt="" />
                                    <img src="/assets/Images/HeroSection/image5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
