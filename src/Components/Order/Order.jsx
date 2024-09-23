import React from 'react'
function Order() {
    return (
        <>
            <section className='lg:h-[calc(100vh-300px)] max-w-[70rem] my-20  px-2 mx-auto  flex justify-center items-center '>
                <div className='  w-full flex flex-col gap-5'>
                    <div className='border '>
                        <div className='flex gap-4 w-full bg-[#00712D] py-4 px-3 '>
                            <div className='text-[#00712D] py-2 px-4 text-xl bg-white font-bold rounded-lg '>
                                1
                            </div>
                            <h1 className='  text-white lg:text-xl text-lg flex justify-center  items-center font-bold' >Login Or Sign Up</h1>
                        </div>
                        <div className='p-5 max-w-[25rem]'>
                            <div className='space-y-4'>
                                <p className="lg:text-xl text-md text-gray-400 ">Enter Email/ Mobile Number</p>
                                <input type="text" className=' border-b-2 w-full   border-gray-200 outline-none' />
                                <p className="lg:text-md text-md text-gray-400">By continuing, you agree to <span className='text-[#00712D]'>  My Kozan LLC</span> terms of Use
                                    and
                                    <span className='text-[#00712D]'>   Privacy Policy </span></p>
                            </div>
                            <div className=' mt-5'>
                                <button className='p-3  bg-[#E38734] lg:text-xl text-lg font-bold text-white rounded-lg'>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border flex items-center p-2 gap-4'>
                        <div className='text-[#00712D] py-2 px-4 text-xl border bg-gray-200 font-bold rounded-lg '>
                            2
                        </div>
                        <p className='font-bold text-gray-400'>Delivery Address</p>
                    </div>
                    <div className='border flex items-center p-2 gap-4'>
                        <div className='text-[#00712D] py-2 px-4 text-xl border bg-gray-200 font-bold rounded-lg '>
                            3
                        </div>
                        <p className='font-bold text-gray-400'>Order Summary</p>
                    </div>
                    <div className='border flex items-center p-2 gap-4'>
                        <div className='text-[#00712D] py-2 px-4 text-xl border bg-gray-200 font-bold rounded-lg '>
                            4
                        </div>
                        <p className='font-bold text-gray-400'>Payment Option</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Order
