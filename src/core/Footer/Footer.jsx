import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <footer className="  bg-[rgb(227,135,52)] lg:py-20 py-10 ">
        <div className=' mx-auto max-w-[70rem] '>
          <div className='grid md:grid-cols-3 gap-5 px-10'>
            <div className='mx-auto'>
              <Link to='/'>
                <img className='w-[250px] h-[100px]' src="/assets/Images/Footer/My_Kozan.png" alt="logo" />
              </Link>
              <div className='flex gap-5 mt-5'>
                <a href='https://www.facebook.com/' target='_blank'>
                  <div className=' bg-black rounded-sm    p-1' >
                    <img className='hover:scale-105 duration-200' src="/assets/Images/Footer/Facebook F (1).png" alt="facebook" />
                  </div>
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                  <div className=' bg-black rounded-sm  p-1'>
                    <img className='hover:scale-105 duration-200' src="/assets/Images/Footer/Instagram (1).png" alt="instagram" />
                  </div>
                </a>
                <a href='https://twitter.com/' target='_blank'>
                  <div className=' bg-black rounded-sm  p-1'>
                    <img className='hover:scale-105 duration-200' src="/assets/Images/Footer/TwitterX (1).png" alt="twitter" />
                  </div>
                </a>
                <a href='https://in.linkedin.com/' target='_blank'>
                  <div className=' bg-black rounded-sm  p-1'>
                    <img className='hover:scale-105 duration-200' src="/assets/Images/Footer/LinkedIn.png" alt="linkedin" />
                  </div>
                </a>
              </div>
            </div>
            <div className='text-center text-white  md:mt-0 mt-5'>
              <h1 className='text-2xl font-semibold'>
                Quick Links:
              </h1>
              <div className='text-lg space-y-2 mt-3'>
                <div>
                  <Link to='aboutus'>
                    <p>About Us</p>
                  </Link>
                </div>
                <div>
                  <Link to='/product'>
                    <p>
                      Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/'>
                    <p>Support</p>
                  </Link>
                </div>
                {/* <p>
                  WishList</p> */}
                <div>
                  <Link to='/cart'>
                    <p>Cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:text-right  text-center text-white md:mt-0 mt-5'>
              <h1 className='text-2xl font-semibold'>Policies:
              </h1>
              <div className='text-lg space-y-2 mt-3'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <h1 className='text-2xl font-semibold'>
                  Admin:</h1>
                <p>Order Tracking</p>
                <p>
                  Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-[#FFF69F] text-center  py-4 font-semibold md:mb-0  gap-1 mb-16 flex flex-wrap justify-center md:px-0 px-5'>
        <div className='flex gap-1'>
          ©2024 by MyKozan LLC <span className='md:block hidden'> | </span>
        </div>
        <div>
          Developed by <span className='text-[#C50707]'>  <a href='http://arrowthought.com/' target='_blank'>  Arrow Thought </a>   </span>
        </div>
      </div >
    </>
  )
}
export default Footer
