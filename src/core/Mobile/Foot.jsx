import React from 'react'

function Foot() {
    return (
        <>

            <section className=' '>
                <div className='flex justify-between  items-center  w-full'>
                    <div className='flex flex-col justify-center items-center '>
                        <img className='h-7' src="/Images/Home.png" alt="home" />
                        <p className="text-sm">Home</p>
                    </div>
                    <div className='flex flex-col justify-center items-center ' >
                        <img  className='h-7'  src="public/Images/Cart.png" alt="cart" />
                        <p className="text-sm ">Cart</p>
                    </div>
                    <div className="flex  flex-col  justify-center items-center ">
                        <img  className='h-7' src="/Images/Heart.png" alt="wishlist" />
                        <p className="text-sm">Wishlist</p>
                    </div>
                    <div className="flex  flex-col justify-center items-center  ">
                        <img className='h-7'  src="/Images/User.png" alt="user" />
                        <p className="text-sm">Profile</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Foot
