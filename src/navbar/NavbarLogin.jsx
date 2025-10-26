import React from 'react'
import { FaDiscourse } from 'react-icons/fa';

export default function NavbarLogin() {
  return (
      <>
          <div className="bg-slate-900 relative">
              <h2 className="xl:text-4xl md:text-3xl text-2xl capitalize font-bold text-yellow-300 text-center py-2 ">Welcome to application Corsaty</h2>
              <FaDiscourse size={22} color="orange" className="absolute right-4 top-4 animate-spin sm:block hidden" />
          </div>
      </>
  );
}
