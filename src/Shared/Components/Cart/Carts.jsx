import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCartStore from '../../Services/Store/UseCart';

function Carts() {
    const { cart, addToCart, removeFromCart, decrementQuantity } = useCartStore();
    const navigate = useNavigate();
    
    const handleRemoveFromCart = (product) => {
        removeFromCart(product._id);
    };
    const handleIncrement = (product) => {
        addToCart(product);
    };
    const handleDecrement = (product) => {
        decrementQuantity(product._id);
    };
    
    const reusableProducts = cart.filter(product => product.title === "Reusable Wooden Money Box");
    const doodleProducts = cart.filter(product => product.title === "Doodle Board");
    const selfieStickProducts = cart.filter(product => product.title === "Selfie Stick");
    
    const calculateTotal = (products) => {
        return products.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
    };

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
            toast.error('Your cart is empty! Please add items before placing an order.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            navigate('/order');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='px-5 h-auto'>
                <section className="mx-auto max-w-[66rem] lg:py-10 py-5 md:px-10 px-3 border rounded-md my-10 lg:mt-0 mt-28">
                    {cart.length === 0 ? (
                        <div className='h-[50vh]'>
                            <div className='justify-center flex items-center font-semibold'>
                                <img className='w-16 h-16' src="/assets/Images/WishList/gif-empty.gif" alt="empty" />
                                <p>Your cart is empty</p>
                            </div>
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 justify-center items-center'>
                            {reusableProducts.length > 0 && (
                                <div className='col-span-4 my-2 border border-gray-200 rounded-lg shadow-md p-4'>
                                    <h2 className="text-xl font-bold mb-4">Reusable Wooden Money Box</h2>
                                    <div className='flex flex-col gap-5'>
                                        {reusableProducts.map((item, index) => (
                                            <div key={index} className='grid md:grid-cols-4 grid-cols-1 gap-5 border border-gray-300 rounded-lg p-4'>
                                                <div className='flex items-center gap-5 md:col-span-2 justify-center'>
                                                    <Link to='/product'>
                                                        <img src={item.imageSrc} alt={item.title} className="md:w-20 md:h-20" />
                                                    </Link>
                                                    <div className="text-gray-400 w-full lg:w-auto lg:flex-grow">
                                                        <p className='text-[#E38734] md:text-base text-sm'>
                                                            <span className='md:text-xl text-lg  font-bold'>{item.price} </span>
                                                            ( {item.minOrder})
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex md:gap-20 items-center md:col-span-2 md:justify-end justify-between'>
                                                    <div className='flex gap-3 items-center'>
                                                        <button onClick={() => handleDecrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleIncrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            +
                                                        </button>
                                                    </div>
                                                    <button onClick={() => handleRemoveFromCart(item)} className="text-red-600 border border-red-400 bg-gray-200 px-3 py-1 rounded gap-1 flex">
                                                        <img className='w-6 h-6' src="/assets/Images/WishList/Remove.png" alt="" />
                                                        <span className='md:block hidden'>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {doodleProducts.length > 0 && (
                                <div className='col-span-4 my-2 border border-gray-200 rounded-lg shadow-md p-4'>
                                    <h2 className="text-xl font-bold mb-4">Doodle Board</h2>
                                    <div className='flex flex-col gap-5'>
                                        {doodleProducts.map((item, index) => (
                                            <div key={index} className='grid md:grid-cols-4 grid-cols-1 gap-5 border border-gray-300 rounded-lg p-4'>
                                                <div className='flex items-center gap-5 md:col-span-2 justify-center'>
                                                    <Link to='/product'>
                                                        <img src={item.imageSrc} alt={item.title} className="md:w-20 md:h-20" />
                                                    </Link>
                                                    <div className="text-gray-400 w-full lg:w-auto lg:flex-grow">
                                                        <p className='text-[#E38734] md:text-base text-sm'>
                                                            <span className='md:text-xl text-lg  font-bold'>{item.price} </span>
                                                            ( {item.minOrder})
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex md:gap-20 items-center md:col-span-2 md:justify-end justify-between'>
                                                    <div className='flex gap-3 items-center'>
                                                        <button onClick={() => handleDecrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleIncrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            +
                                                        </button>
                                                    </div>
                                                    <button className="text-red-600 border border-red-400 bg-gray-200 px-3 py-1 rounded flex gap-1" onClick={() => handleRemoveFromCart(item)}>
                                                        <img className='w-6 h-6' src="/assets/Images/WishList/Remove.png" alt="" />
                                                        <span className='md:block hidden'>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {selfieStickProducts.length > 0 && (
                                <div className='col-span-4 my-2 border border-gray-200 rounded-lg shadow-md p-4'>
                                    <h2 className="text-xl font-bold mb-4">Selfie Stick</h2>
                                    <div className='flex flex-col gap-5'>
                                        {selfieStickProducts.map((item, index) => (
                                            <div key={index} className='grid md:grid-cols-4 grid-cols-1 gap-5 border border-gray-300 rounded-lg p-4'>
                                                <div className='flex items-center gap-5 md:col-span-2 justify-center'>
                                                    <Link to='/product'>
                                                        <img src={item.imageSrc} alt={item.title} className="md:w-20 md:h-20" />
                                                    </Link>
                                                    <div className="text-gray-400 w-full lg:w-auto lg:flex-grow">
                                                        <p className='text-[#E38734] md:text-base text-sm'>
                                                            <span className='md:text-xl text-lg font-bold'>{item.price} </span>
                                                            ( {item.minOrder})
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex md:gap-20 items-center md:col-span-2 md:justify-end justify-between'>
                                                    <div className='flex gap-3 items-center'>
                                                        <button onClick={() => handleDecrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleIncrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                            +
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => handleRemoveFromCart(item)} className="text-red-600 border border-red-400 bg-gray-200 px-3 py-1 rounded flex gap-1">
                                                            <img className='w-6 h-6' src="/assets/Images/WishList/Remove.png" alt="" />
                                                            <span className='md:block hidden'>Remove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {cart.length > 0 && (
                        <div className='text-gray-400 mt-20 text-center'>
                            <div className='mb-6'>
                                <p className='text-lg'>Your Total Order</p>
                                <p>
                                    You Pay :
                                    <span className='text-[#E38734] ml-1'>
                                        ${cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}
                                    </span>
                                </p>
                                <p>(Including delivery and other charges.)</p>
                            </div>
                            <div>
                                <button
                                    onClick={handlePlaceOrder}
                                    className='bg-[#E38734] px-4 hover:scale-105 duration-200 py-2 text-white rounded-lg'>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}

export default Carts;
