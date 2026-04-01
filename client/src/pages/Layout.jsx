import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { dummyUserData } from '../assets/assets';
import Loading from '../components/Loading';

const Layout = () => {
  const user = dummyUserData;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) {
    return <Loading />;
  }

  return user ? (
    <div className="w-full flex h-screen relative overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 z-40 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 
        bg-white border-r border-slate-200 shadow-xl sm:shadow-none`} 
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="flex-1 bg-slate-50 h-full overflow-y-auto">
        <Outlet />
      </div>

      <button
        className="absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow sm:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  ) : (
    <Sidebar />
  );
};

export default Layout;