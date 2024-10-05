import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Main from '../core/main/Main';
import AdminProduct from '../components/AdminProduct';

const AdminRoute = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product' element={<AdminProduct />} />
        <Route path="" element={<Navigate to="/admin/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
