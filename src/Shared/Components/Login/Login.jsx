import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
function Login() {
    const [showPassword, setShowPassword] = useState(false)


    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    console.log("data login", data)


    const handleSubmit = (e) => {
        e.preventDefault()
    }




    




    return (
        <section className='md:mt-0 mt-36 my-20  px-2   flex justify-center items-center '>
            <div className='lg:max-w-[30rem]   mx-auto max-h-[40rem] border  '>
                <div className='flex  justify-center items-center gap-2  bg-[#00712D]' >
                    <h1 className=' text-white lg:text-xl text-lg  text-center py-4 font-bold' >Login </h1>
                </div>
                <form className='md:p-6 p-2 md:my-0 my-4' >
                    <div className='space-y-6'>
                        <div>
                            <p className="lg:text-lg text-md text-gray-400 ">Enter Email/ Mobile Number</p>
                            <input type="text" required name='email' value={data.email} onChange={handleOnChange} className=' border-b-2 w-full mt-2  border-gray-200 outline-none' />
                        </div>
                        <div>
                            <p className="lg:text-lg text-md text-gray-400 ">Password</p>
                            <div className='flex  '>
                                <input type={showPassword ? "text" : "password"} name='password' value={data.password} onChange={handleOnChange} required className=' border-b-2 w-full  border-gray-200 outline-none' />
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
                            <Link to={'/forgot'} className='w-fit block ml-auto hover:underline hover:text-red-600 mt-3'>
                                Forgot Password ?
                            </Link>
                        </div>
                        <p className="lg:text-base text-md text-gray-400">By continuing, you agree to <span className='text-[#00712D]'>  My Kozan LLC</span> terms of Use
                            and
                            <span className='text-[#00712D]'>   Privacy Policy </span></p>
                    </div>
                    <div className='text-center mt-10'>
                        <button className='p-3 w-full bg-[#E38734] hover:scale-105 duration-200  lg:text-xl text-lg  text-white rounded-lg' onSubmit={handleSubmit}>
                            Sign In
                        </button>
                    </div>
                    <div className=' flex flex-wrap  justify-center items-center mt-5'>
                        <p className='text-center md:text-base text-sm '>New to MyKozan LLC ?
                        </p>
                        <Link to='/signin'>
                            <span className='font-semibold  cursor-pointer'> <div className='flex justify-center items-center'>
                                <img className='md:w-12 md:h-12 w-9 h-9 -hue-rotate-60' src="/assets/Images/sign/nnn.gif" alt="" />
                                <p className=" md:text-base text-sm"> Create an Account</p> </div></span> </Link>
                    </div>
                </form>
            </div>
        </section >
    )
}
export default Login
