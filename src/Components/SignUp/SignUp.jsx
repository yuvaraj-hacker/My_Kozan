import React from 'react'

function SignUp() {
    return (
        <section className='lg:h-[calc(100vh-300px)] my-20  px-2   flex justify-center items-center '>
            <div className='lg:max-w-[30rem]   mx-auto max-h-[30rem] border  '>
                <h1 className=' bg-[#00712D] text-white lg:text-xl text-lg  text-center py-4 font-bold' >Login Or Sign Up</h1>
                <div className='p-5'>


                    <div className='space-y-4'>
                        <p className="lg:text-xl text-md text-gray-400 ">Enter Email/ Mobile Number</p>
                        <input type="text" className=' border-b-2 w-full  border-gray-200 outline-none' />
                        <p className="lg:text-md text-md text-gray-400">By continuing, you agree to <span className='text-[#00712D]'>  My Kozan LLC</span> terms of Use
                            and
                          <span className='text-[#00712D]'>   Privacy Policy </span></p>
                    </div>
                    <div className='text-center mt-10'>
                        <button className='p-3 w-full bg-[#E38734] lg:text-xl text-lg font-bold text-white rounded-lg'>
                            Continue
                        </button>
                    </div>
                    <p className='text-center mt-20'>New to MyKozan LLC? Create an account</p>
                </div>
            </div>
        </section>
    )
}

export default SignUp
