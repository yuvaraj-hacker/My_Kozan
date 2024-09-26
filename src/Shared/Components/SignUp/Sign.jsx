import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
function Sign() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPass, setPass] = useState(false)
  return (
    <>
      <section className='lg:h-[calc(100vh-300px)] my-20  px-2   flex justify-center items-center '>
        <div className='lg:max-w-[30rem]   mx-auto max-h-[40rem] border  '>
          <div className='flex  justify-center items-center gap-2  bg-[#00712D]' >
            <h1 className=' text-white lg:text-xl text-lg  text-center py-4 font-bold' >SignUp </h1>
          </div>
          <div className='p-6'>
            <div className='space-y-6'>
              <div>
                <p className="lg:text-lg text-md text-gray-400 ">Name</p>
                <input type="text" required className=' border-b-2 w-full  border-gray-200 outline-none' />
              </div>
              <div>
                <p className="lg:text-lg text-md text-gray-400 ">Email</p>
                <input type="text" required className=' border-b-2 w-full  border-gray-200 outline-none' />
              </div>
              <div>
                <p className="lg:text-lg text-md text-gray-400 ">Password</p>
                <div className='flex  '>
                  <input type={showPassword ? "text" : "password"} required className=' border-b-2 w-full  border-gray-200 outline-none' />
                  <div className='cursor-pointer' onClick={() => setShowPassword((preve) => !preve)}>
                    <span className='text-xl'>
                      {
                        showPassword ? (
                          <IoEye />
                        )
                          : (
                            <IoMdEyeOff />
                          )
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="lg:text-lg text-md text-gray-400 "> Confirm Password</p>
                <div className='flex  '>
                  <input type={showPass ? "text" : "password"} required className=' border-b-2 w-full  border-gray-200 outline-none' />
                  <div className='cursor-pointer' onClick={() => setPass((preve) => !preve)}>
                    <span className='text-xl'>
                      {
                        showPass ? (
                          <IoEye />
                        )
                          : (
                            <IoMdEyeOff />
                          )
                      }
                    </span>
                  </div>
                </div>
              </div>
              <p className="lg:text-base text-md text-gray-400">By continuing, you agree to <span className='text-[#00712D]'>  My Kozan LLC</span> terms of Use
                and
                <span className='text-[#00712D]'>   Privacy Policy </span></p>
            </div>
            <div className='text-center mt-10'>
              <button className='p-3 w-full bg-[#E38734] hover:scale-105 duration-200  lg:text-xl text-lg  text-white rounded-lg'>
                SignUp
              </button>
            </div>
            <div className=' flex flex-wrap  justify-center items-center mt-5'>
              <p className='text-center md:text-base text-sm '>Already Have an Account ? 
              </p>
              <Link to='/login'>
                <span className='font-semibold  cursor-pointer'> <div className='flex justify-center items-center'>
                  <img className='md:w-12 md:h-12 w-9 h-9 -hue-rotate-60' src="/assets/Images/sign/nnn.gif" alt="" />
                  <p className=" md:text-base text-sm"> Login</p> </div></span> </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Sign
