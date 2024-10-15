import React, { useState } from 'react';

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { id: 1001, customer: 'xxxxx', status: 'Delivered', total: '$100.00', paymentStatus: 'Paid' },
    { id: 1002, customer: 'xxxxx', status: 'Pending', total: '$200.00', paymentStatus: 'Pending' },
    { id: 1003, customer: 'xxxxxx', status: 'Delivered', total: '$150.00', paymentStatus: 'Paid' },
  ];

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search orders"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Filter</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Sort</button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${order.status === 'Delivered' ? 'text-green-500' : 'text-red-500'}`}>{order.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${order.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>{order.paymentStatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
                aria-hidden="true"
              ></div>

              <div className="relative bg-white w-full max-w-lg p-6 rounded-lg shadow-lg z-20">
                <h2 className="text-xl font-bold mb-4">Customer Details</h2>
                <p><strong>Customer Name:</strong> {selectedOrder.customer}</p>
                <p><strong>Email:</strong> jane.smith@example.com</p>
                <p><strong>Phone:</strong> 987-654-3210</p>
                <p><strong>Address:</strong> 456 Oak St, Townsville, USA</p>
                <p><strong>Status:</strong> {selectedOrder.status}</p>
                <p><strong>Total:</strong> {selectedOrder.total}</p>
                <p><strong>Payment Status:</strong> {selectedOrder.paymentStatus}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
