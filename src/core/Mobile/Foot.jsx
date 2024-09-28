import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../../Shared/Services/Store/UseCart';
function Foot() {
    const toggleMenu = () => {
        if (!isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpen(!isOpen);
    };
    const { cart } = useCartStore();
    return (
        <>
            <section className=' '>
                <div className='flex justify-around  items-center mt-2  w-full'>
                    <Link to='/' onClick={toggleMenu}>
                        <div className='flex flex-col justify-center items-center '>
                            <img className='h-7' src="/assets/Images/Footer/Home.png" alt="home" />
                            <p className="text-sm ">Home</p>
                        </div>
                    </Link>
                    <Link to="/cart" onClick={toggleMenu}>
                        <div className="flex">
                            <div className="relative  left-5 bottom-3 h-1 w-1 text-[#E38734] rounded-full ">
                                {cart.length > 0 && (
                                    <p> {cart.length}</p>
                                )}
                            </div>
                            <img
                                className="cursor-pointer h-7 opacity-85"
                                src="/assets/Images/Header/Shopping Cart (1).png"
                                alt="cart"
                                title="Cart"
                            />
                        </div>
                        <p className="text-sm ml-1">Cart</p>
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
