
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Checkout = () => {
    const dispatch = useDispatch();
    const { address, paymentMethod, subtotal, shipping } = useSelector(state => state);

    const [addressInput, setAddressInput] = useState(address);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showNewAddressModal, setShowNewAddressModal] = useState(false);

    const handleAddressChange = (e) => {
        setAddressInput(e.target.value);
    };

    const handleEditAddress = () => {
        setShowEditModal(true);
    };

    const handleSaveAddress = () => {

        dispatch({ type: 'SET_ADDRESS', payload: addressInput });
        setShowEditModal(false);
    };

    const handleAddNewAddress = () => {
        setShowNewAddressModal(true);
    };

    const handleSaveNewAddress = () => {

        dispatch({ type: 'SET_ADDRESS', payload: addressInput });
        setShowNewAddressModal(false);
        setAddressInput('');
    };

    const handlePaymentChange = (e) => {
        dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value });
    };

    const handlePlaceOrder = () => {

        alert('Order placed successfully!');
    };

    return (
        <div className="max-w-[48rem] px-5 mx-auto gap-5 bg-white my-20 mt-40 grid grid-cols-1">
            <div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Address</h2>
                    <div className='flex justify-between'>
                        <p className="mt-2">{address || 'No address provided'}</p>
                        <button
                            onClick={handleEditAddress}
                            className="mt-2 text-[#E38734] hover:underline"
                        >
                            Edit
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <button
                        onClick={handleAddNewAddress}
                        className="mt-4 text-[#E38734] hover:underline"
                    >
                        Add New Address
                    </button>
                </div>
            </div>

            <div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Payment</h2>
                    <select
                        value={paymentMethod}
                        onChange={handlePaymentChange}
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="cashfree">Cash On Delivery</option>
                        <option value="creditCard">RazorPay</option>
                    </select>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                    <p className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${(subtotal + shipping).toFixed(2)}</span>
                    </p>
                </div>

                <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Place Order
                </button>
            </div>


            {showEditModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Edit Address</h2>
                        <textarea
                            type="text"
                            rows={3}
                            value={addressInput}
                            onChange={handleAddressChange}
                            placeholder="Enter your address"
                            className="mt-2 p-2 border border-gray-300 rounded w-full"
                        />
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleSaveAddress}
                                className="bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 transition"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="bg-gray-300 text-gray-700 py-2 px-3 rounded hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {showNewAddressModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
                        <textarea
                            type="text"
                            rows={3}
                            value={addressInput}
                            onChange={handleAddressChange}
                            placeholder="Enter new address"
                            className="mt-2 p-2 border border-gray-300 rounded w-full"
                        />
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleSaveNewAddress}
                                className="bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 transition"
                            >
                                Save New Address
                            </button>
                            <button
                                onClick={() => setShowNewAddressModal(false)}
                                className="bg-gray-300 text-gray-700 py-2 px-3 rounded hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
