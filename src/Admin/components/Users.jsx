import React from 'react';

function Users() {
    // Sample users data
    const users = [
        { id: 1, name: 'xxxx', email: 'xxxxx', role: 'Admin', status: 'Active' },
        { id: 2, name: 'xxxxx', email: 'xxxx', role: 'Customer', status: 'Inactive' },
        { id: 3, name: 'xxxx', email: 'xxxxx', role: 'Customer', status: 'Active' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users</h1>
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search users"
                    className="border border-gray-300 p-2 rounded-lg"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add User</button>
            </div>

            <div className="bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                <td className={`px-6 py-4 whitespace-nowrap ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{user.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
