import React from 'react'
import { Link } from 'react-router-dom'
function Foot() {
    return (
        <>
            <section className=' '>
                <div className='flex justify-between  items-center  w-full'>
                    <Link to='/'>

                        <div className='flex flex-col justify-center items-center '>
                            <img className='h-7' src="/Images/Home.png" alt="home" />
                            <p className="text-sm font-semibold">Home</p>
                        </div>
                    </Link>
                    <Link to='/cart'>
                        <div className='flex flex-col justify-center items-center ' >
                            <img className='h-7' src="public/Images/Cart.png" alt="cart" />
                            <p className="text-sm font-semibold">Cart</p>
                        </div>
                    </Link>
                    <Link to='/wishlist'>

                        <div className="flex  flex-col  justify-center items-center ">
                            <img className='h-7' src="/Images/Heart.png" alt="wishlist" />
                            <p className="text-sm font-semibold">Wishlist</p>
                        </div>
                    </Link>
                    <Link to='/'>

                        <div className="flex  flex-col justify-center items-center  ">
                            <img className='h-7' src="/Images/User.png" alt="user" />
                            <p className="text-sm font-semibold">Profile</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Foot







