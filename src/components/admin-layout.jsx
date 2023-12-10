// components/AdminLayout.js
import React from 'react';
import Head from './Head';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Head /> 
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
