import React from 'react'

function Sidebar() {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <div className="w-64 bg-white shadow-md">
                    <div className="h-16 flex items-center justify-center font-bold text-lg text-blue-500">
                        Admin Panel
                    </div>
                    <nav className="mt-4">
                        <a
                            href="#"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            Products
                        </a>
                        <a
                            href="#"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            Orders
                        </a>
                        <a
                            href="#"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            Users
                        </a>
                        <a
                            href="#"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                            Settings
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
