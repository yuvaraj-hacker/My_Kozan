import React from 'react'
function Cart() {
    return (
        <>
            <section className="mx-auto max-w-[68rem] py-10 px-5 border  rounded-md  my-10 ">
                <div className='grid lg:grid-cols-5 justify-center items-center'>
                    <div className='col-span-3 '>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-wrap gap-5'>
                                <img src="public/Images/product-1.png" alt="product1" />
                                <p className="text-gray-400 ">
                                    Reusable Wooden Money Box with Counter...<br />
                                    <p className='text-[#E38734]'> <span className='text-xl font-bold'>$5.99 </span>
                                        (Min. 50 Pcs)</p>
                                </p>
                            </div>
                            <div className=' flex lg:justify-around'>
                                <div>
                                </div>
                                <button className='bg-[#E38734] px-4 hover:scale-105 duration-200   py-2 text-white rounded-lg' >
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-400 col-span-2'>
                        <div className='mb-6'>
                            <p className="">Your Order </p>
                            <p className="text-lg">You Pay: <span className='text-[#E38734]'>  $5.99</span></p>
                            <p className="">(Including delivery and other charges. View Cart for
                                deatails)</p>
                        </div>
                        <div>
                            <button className='bg-[#00712D] hover:scale-105 duration-200  text-white  px-4 py-2 rounded-lg mt-32'>
                                View Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart
