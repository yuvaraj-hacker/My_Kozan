import React from 'react'

function Cart() {
    return (
        <>
            <section className="mx-auto max-w-[65rem] py-10 px-5 border  rounded-md  my-10 ">
                <div className='flex  items-center'>


                    <div className='flex  gap-5'>
                        <img src="public/Images/product1.png" alt="product1" />
                        <p className="text-gray-400 ">
                            Reusable Wooden Money Box with Counter...<br />
                            <p className='text-[#E38734]'> <span className='text-xl font-bold'>$5.99 </span>
                                (Min. 50 Pcs)</p>

                        </p>



                    </div>
                    

                    <div className='text-gray-400'>
                        <p className="">Your Order </p>
                        <p className="text-lg">You Pay: <span className='text-[#E38734]'>  $5.99</span></p>
                        <p className="">(Including delivery and other charges. View Cart for
                            deatails)</p>
                    </div>
                </div>
                <div className='flex justify-evenly mt-5 text-white text-xl'>
                    <div>
                        <button className='bg-[#E38734] px-4 py-2 rounded-lg' >
                            Proceed To Checkout
                        </button>
                    </div>
                    <div>
                        <button className='bg-[#00712D] px-4 py-2 rounded-lg'>
                            View Cart
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Cart
