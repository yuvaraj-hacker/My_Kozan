// components/Cart.js
import React from "react";
import useCart from "../../Services/Store/UseCart"; // Make sure the import path is correct
import { Link } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

    if (cart.length === 0) {
        return (
            <div className="text-center mt-4 h-screen"  >
                <h1>Your cart is empty.</h1>
                <Link to="/">
                    <button className="bg-[#00712D] text-white py-2 px-4 rounded">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        );
    }

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.Sale_Price * item.quantity, 0);

    return (
        <section className="my-10 max-w-[68rem] mx-auto">
            <h1 className="text-center text-2xl border bg-[#00712D] text-white p-2 rounded-lg">
                Shopping Cart
            </h1>
            <div className="grid gap-4 mt-6">
                {cart.map((item) => (
                    <div key={item._id} className="flex justify-between items-center border p-4 rounded-lg">
                        <div className="flex items-center">
                            <img src={item.Images[0]} alt={item.Product_Name} className="h-16 w-16 object-cover mr-4" />
                            <div>
                                <h2 className="font-semibold">{item.Product_Name}</h2>
                                <p>Price: ${item.Sale_Price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <div className="flex gap-5">
                                    <button onClick={() => decreaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">-</button>
                                    <button onClick={() => increaseQuantity(item._id)} className="bg-gray-300 px-2 rounded">+</button>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => removeFromCart(item._id)}
                            className="bg-red-500 text-white py-1 px-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <h2>Total Items: {totalItems}</h2>
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <button onClick={clearCart} className="bg-gray-500 text-white py-2 px-4 rounded">
                    Clear Cart
                </button>
            </div>
            <Link to="/">
                <button className="mt-6 bg-[#00712D] text-white py-2 px-4 rounded">Continue Shopping</button>
            </Link>
        </section>
    );
}

export default Cart;
