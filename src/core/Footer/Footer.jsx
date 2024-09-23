import React from 'react'
function Footer() {
  return (
    <>
      <footer className="  bg-[rgb(227,135,52)] lg:py-20 py-10 ">
        <div className=' mx-auto max-w-[70rem] '>
          <div className='flex justify-between  flex-wrap px-10'>
            <div>
              <img className='w-[250px] h-[100px]' src="/Images/My_Kozan.png" alt="logo" />
              <div className='flex gap-5 mt-5'>
                <div className=' bg-black rounded-sm  p-1' >
                  <img src="public/Images/Facebook F (1).png" alt="facebook" />
                </div>
                <div className=' bg-black rounded-sm  p-1'>
                  <img src="/Images/Instagram (1).png" alt="instagram" />
                </div>
                <div className=' bg-black rounded-sm  p-1'>
                  <img src="/Images/TwitterX (1).png" alt="twitter" />
                </div>
                <div className=' bg-black rounded-sm  p-1'>
                  <img src="/Images/LinkedIn.png" alt="linkedin" />
                </div>
              </div>
            </div>
            <div className='lg:text-center text-white  md:mt-0 mt-5'>
              <h1 className='text-2xl font-semibold'>
                Quick Links:
              </h1>
              <div className='text-lg space-y-2 mt-3'>
                <p>About Us</p>
                <p>
                  Products</p>
                <p>Support</p>
                <p>
                  WishList</p>
                <p>Cart</p>
              </div>
            </div>
            <div className='lg:text-right text-white md:mt-0 mt-5'>
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
