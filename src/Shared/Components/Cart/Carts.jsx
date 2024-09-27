import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../Services/Store/UseCart'; // Adjust the path if needed

function Carts() {
    const { cart, addToCart, removeFromCart, decrementQuantity } = useCartStore();

    const handleRemoveFromCart = (product) => {
        removeFromCart(product._id);
    };

    const handleIncrement = (product) => {
        addToCart(product);
    };

    const handleDecrement = (product) => {
        decrementQuantity(product._id);
    };

    // Separate products by category (assuming we have categories or types)
    const reusableProducts = cart.filter(product => product.title === "Reusable Wooden Money Box");
    const doodleProducts = cart.filter(product => product.title === "Doodle Board");

    // Calculate total for a specific set of products
    const calculateTotal = (products) => {
        return products.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <section className="mx-auto max-w-[68rem] py-10 px-10 border rounded-md my-20">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 justify-center items-center '>

                        {/* Section for Reusable Wooden Money Box */}
                        {reusableProducts.length > 0 && (
                            <div className='col-span-3'>
                                <h2 className="text-xl font-bold mb-4">Reusable Wooden Money Box</h2>
                                <div className='flex flex-col gap-5'>
                                    {reusableProducts.map((item, index) => (
                                        <div key={index} className='flex flex-wrap items-center justify-between'>
                                            <img src={item.imageSrc} alt={item.title} className="w-20 h-20" />
                                            <div className="text-gray-400 w-full lg:w-auto lg:flex-grow">
                                                <p>{item.title}</p>
                                                <p className='text-[#E38734]'>
                                                    <span className='text-xl font-bold'>{item.price}</span>
                                                    (Min. {item.minOrder})
                                                </p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <button onClick={() => handleDecrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleIncrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                    +
                                                </button>
                                                <button onClick={() => handleRemoveFromCart(item)} className="text-red-600 bg-gray-200 px-3 py-1 rounded">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}

                        <div className="mt-6 col-span-2 ">
                            <Link to={{
                                pathname: '/order',
                                state: { products: reusableProducts }
                            }}>
                                <button className='bg-[#00712D] px-4 hover:scale-105 duration-200 py-2 text-white rounded-lg'>
                                    Buy This Now (Total: ${calculateTotal(reusableProducts)})
                                </button>
                            </Link>
                        </div>


                        {doodleProducts.length > 0 && (
                            <div className='col-span-3'>
                                <h2 className="text-xl font-bold mb-4">Doodle Board</h2>
                                <div className='flex flex-col gap-5'>
                                    {doodleProducts.map((item, index) => (
                                        <div key={index} className='flex flex-wrap items-center justify-between'>
                                            <img src={item.imageSrc} alt={item.title} className="w-20 h-20" />
                                            <div className="text-gray-400 w-full lg:w-auto lg:flex-grow">
                                                <p>{item.title}</p>
                                                <p className='text-[#E38734]'>
                                                    <span className='text-xl font-bold'>{item.price}</span>
                                                    (Min. {item.minOrder})
                                                </p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <button onClick={() => handleDecrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleIncrement(item)} className="text-gray-600 bg-gray-200 px-3 py-1 rounded">
                                                    +
                                                </button>
                                                <button onClick={() => handleRemoveFromCart(item)} className="text-red-600 bg-gray-200 px-3 py-1 rounded">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-6 col-span-2">
                            <Link to={{
                                pathname: '/order',
                                state: { products: doodleProducts }
                            }}>
                                <button className='bg-[#00712D] px-4 hover:scale-105 duration-200 py-2 text-white rounded-lg'>
                                    Buy This Now (Total: ${calculateTotal(doodleProducts)})
                                </button>
                            </Link>
                        </div>


                    </div>
                )}
                <div className='text-gray-400 mt-20 border p-5'>
                    <div className='mb-6'>
                        <p>Your Total Order</p>
                        <p className="text-lg">
                            You Pay:
                            <span className='text-[#E38734]'>
                                ${cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}
                            </span>
                        </p>
                        <p>(Including delivery and other charges. )</p>
                    </div>
                    <div>
                        <Link to='/order'>
                            <button className='bg-[#E38734] px-4 hover:scale-105 duration-200 py-2 text-white rounded-lg'>
                                Proceed To Checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Carts;
