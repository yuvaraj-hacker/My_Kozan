import React from 'react'
function Forgot() {
    return (
        <>
            <section className=' max-w-[70rem] px-5 h-[100vh]   mx-auto'>
                <div className='flex justify-center  items-center '>
                    <img className='lg:block hidden' src="/assets/Images/Forgot/forr.png" alt="forgotpassword" />
                    {/* <div className=' w-full  h-fit mx-auto  border  rounded-lg '>
                        <div className='flex  justify-center items-center gap-2   bg-[#00712D]' >
                            <h1 className=' text-white lg:text-xl text-lg  text-center py-4 font-bold' >Reset Password </h1>
                        </div>
                        <div className='p-2 space-y-7'>
                            <div>
                                <input placeholder='Old Password' required type='password' className='p-3 w-full border focus:outline-[#E38734]' />
                            </div>
                            <div className='space-y-3'>
                            <input placeholder='New Password' required type='password' className='p-3 w-full border focus:outline-[#E38734]' />
                            <input placeholder='Confirm Password' required type='password' className='p-3 w-full border focus:outline-[#E38734]' />
                            </div>
                            <div>
                                <button className='w-full bg-[#00712D] p-3 text-white '>
                                    Set Password
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className=' w-full  h-fit mx-auto  border  rounded-lg  md:my-0 my-5'>
                        <div className='flex  justify-center items-center gap-2   ' >
                            <h1 className='  lg:text-xl text-lg  text-center py-4 font-bold' >Forget Password </h1>
                        </div>
                        <div className='p-2 space-y-7'>
                            <div>
                                <input placeholder='Your Mail' required type='text' className='p-3 w-full border focus:outline-[#E38734]' />
                            </div>
                            <div>
                                <button className='w-full bg-[#00712D] rounded-2xl p-3 hover:bg-green-700 text-white text-xl '>
                                    Send Mail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Forgot
