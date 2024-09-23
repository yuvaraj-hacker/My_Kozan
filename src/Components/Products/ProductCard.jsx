import React from 'react'
function ProductCard() {
  return (
    <>
      <section className='mx-auto max-w-[70rem] px-5 my-10'>
        <div className="grid md:grid-cols-8  sm:grid-cols-5   gap-5 ">
          <div className='col-span-1 flex flex-col gap-3'>
            <img className='w-[60px] h-[60px]' src="/Images/productview-1.png" alt="" />
            <img className='w-[60px] h-[60px]' src="/Images/productview-2.png" alt="" />
            <img className='w-[60px] h-[60px]' src="/Images/productview-3.png" alt="" />
            <img className='w-[60px] h-[60px]' src="/Images/productview-4.png" alt="" />
            <img className='w-[60px] h-[60px]' src="/Images/productview-5.png" alt="" />
          </div>
          <div className='col-span-3'>
            <img src="/Images/productview-6.png" alt="" />
            <div className='flex justify-between px-4 mt-4'>
              <button className='border py-2 lg:px-4 px-2 rounded-lg flex gap-1 text-white hover:scale-105 duration-200   bg-[#E38734]'>
                <span> <img src="/Images/Shopping Cart.png" alt="cart" /></span> Add to Cart
              </button>

              <button className='border py-2 px-3 rounded-lg hover:scale-105 duration-200 text-white  bg-[#00712D]'>
                Buy now
              </button>
            </div>
          </div>
          <div className='col-span-4 flex flex-col gap-3 '>
            <p className=" text-xl text-gray-400"> Reusable Wooden Money Box with Counter...</p>
            <div className='flex items-center gap-3 '>
              <div className='flex gap-3  bg-[#00712D] py-2 px-4 rounded-lg'>
                <p className="text-white text-xl">4.5</p>
                <img className='h-4 mt-1' src="/Images/Star (2).png" alt="" />
              </div>
              <p className='text-lg text-gray-400'>2,264 Ratings & 195 Reviews</p>
            </div >
            <p className="text-[#E38734] text-lg"> <span className='text-2xl font-bold'> $5.99 </span>
              (Min. 50 Pcs)</p>
            <div className='border mt-5'>
              <div className="border-b-2 p-4">
                <p className="text-xl font-bold  ">Specifications</p>
              </div>
              <div>
                <p className="px-4 py-2 text-xl">
                  In The Box
                </p>
                <div className='grid grid-cols-3 p-4 text-gray-400  gap-1 grid-rows-2'>
                  <p className="col-span-1">Sales Package </p>
                  <p className="col-span-2">  Pack of 1 Cloth Dryer Stand</p>
                  <p className="col-span-1">Pack of</p>
                  <p className="col-span-2">1</p>
                </div>

              </div>
            </div>
            <div className='border '>
              <div>
                <p className="px-4 py-2 text-xl" >
                  General
                </p>
                <div className='grid grid-cols-3 text-gray-400 p-4 gap-1 grid-rows-2'>
                  <p className="col-span-1">Material</p>
                  <p className="col-span-2">Wood</p>
                  <p className="col-span-1">Shape</p>
                  <p className="col-span-2">Piggy Bank</p>
                  <p className="col-span-1">Place of Origin </p>
                  <p className="col-span-2">China</p>
                  <p className="col-span-1">Brand Name</p>
                  <p className="col-span-2">No</p>
                  <p className="col-span-1">Modal Number</p>
                  <p className="col-span-2">No</p>
                  <p className="col-span-1">Design</p>
                  <p className="col-span-2">Customized Designs</p>
                  <p className="col-span-1">MOQ</p>
                  <p className="col-span-2">50 Pcs</p>
                  <p className="col-span-1">Product name</p>
                  <p className="col-span-2">Reusable Wooden Money Box with Counter</p>
                  <p className="col-span-1">Usage</p>
                  <p className="col-span-2">Coin Saving Bank</p>
                  <p className="col-span-1">Function </p>
                  <p className="col-span-2">Save Money Bank</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProductCard
