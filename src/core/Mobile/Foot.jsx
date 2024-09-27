import React from 'react'
import { Link } from 'react-router-dom'
function Foot() {
    const toggleMenu = () => {
        if (!isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpen(!isOpen);
    };



    return (
        <>
            <section className=' '>
                <div className='flex justify-around  items-center  w-full'>
                    <Link to='/' onClick={toggleMenu}>
                        <div className='flex flex-col justify-center items-center '>
                            <img className='h-7' src="/assets/Images/Footer/Home.png" alt="home" />
                            <p className="text-sm ">Home</p>
                        </div>
                    </Link>
                    <Link to='/cart' onClick={toggleMenu}>
                        <div className='flex flex-col justify-center items-center ' >
                            <img className='h-7' src="/assets/Images/Header/Cart.png" alt="cart" />
                            <p className="text-sm ">Cart</p>
                        </div>
                    </Link>
                    <Link to='/login' onClick={toggleMenu}>
                        <div className="flex  flex-col justify-center items-center  ">
                            <img className='h-7' src="/assets/Images/Header/User.png" alt="user" />
                            <p className="text-sm ">Profile</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Foot
