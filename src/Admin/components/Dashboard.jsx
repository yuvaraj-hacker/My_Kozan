import React from 'react'
import SideBar from '../core/sidebar/SideBar'

const Dashboard = () => {
  return (


    <>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Total Products</h3>
            <p className="text-gray-600 mt-2">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Total Orders</h3>
            <p className="text-gray-600 mt-2">500</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Total Users</h3>
            <p className="text-gray-600 mt-2">789</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard




