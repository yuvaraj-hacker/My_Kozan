import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
    // Define isOpen state
    const [isOpen, setOpen] = useState(false); 

    const toggleMenu = () => {
        if (!isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        }
        setOpen(!isOpen); // Toggle the menu state
    };

    return (
        <>
            <section className="mx-auto md:max-w-[70rem] w-full md:px-5 lg:my-10 md:my-2 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 py-5 text-white lg:gap-0 gap-2  md:px-0 px-5  md:rounded-xl bg-[#E38734] md:mt-0 ">
                    <div className="flex justify-center items-center">
                        <div className='md:block hidden '>
                            <span className="md:text-5xl  ">
                                Boost Your <br />
                                Store's Success <br />
                            </span>
                            <span className="md:text-3xl  font-semibold ">
                                with our handpicked, <br />
                            </span>
                            <span className="md:text-3xl  font-bold">High Profit Products !</span>
                            <div className=' lg:mt-0  mt-4'>
                                <Link to='/product' onClick={toggleMenu}>
                                    <button className='bg-black text-white font-semibold lg:px-4 lg:py-3 p-2 lg:text-base text-sm rounded-lg lg:mt-10 hover:scale-105 duration-200'>
                                        Shop Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='md:hidden block text-center'>
                            <p className="text-2xl ">
                                <span>Boost Your Store's Success </span>
                                <span className='text-lg font-semibold'>
                                    with our handpicked, <br />
                                </span>
                                <span className='text-lg font-bold'> High Profit Products ! </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='grid grid-cols-3 lg:gap-0 gap-3'>
                            <div className='flex justify-center '>
                                <div className='space-y-10'>
                                    <img className='transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]' src="/assets/Images/HeroSection/image1.png" alt="" />
                                    <img className='transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]' src="/assets/Images/HeroSection/image4.png" alt="" />
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <img className='transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]' src="/assets/Images/HeroSection/image2.png" alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <div className='space-y-10  '>
                                    <img className='transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]' src="/assets/Images/HeroSection/image3.png" alt="" />
                                    <img className='transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]' src="/assets/Images/HeroSection/image5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:mt-0  mt-4 md:hidden block text-center'>
                        <Link to='/product' onClick={toggleMenu}>
                            <button className='bg-[#00712D] text-white font-semibold lg:px-4 lg:py-3 p-2 lg:text-base text-sm rounded-lg lg:mt-10 hover:scale-105 duration-200'>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
