import React, { useState } from "react";
import { FaDiscourse } from "react-icons/fa";
import { LuAlignLeft } from "react-icons/lu";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="px-4 flex justify-between items-center relative">
                <LuAlignLeft className="w-7 h-7 cursor-pointer" color="blue" onClick={() => setOpen(true)} />
                <h1 className="font-bold text-3xl text-blue-400">C O R S A T Y</h1>
                <FaDiscourse size={22} color="orange" className="animate-bounce" />
            </div>
            {open && <div onClick={() => setOpen(false)}></div>}

            <div
                className={`fixed top-15 left-0 overflow-y-auto rounded-2xl w-40 text-left bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="p-5 border-b flex justify-between items-center">
                    <h2 className="text-lg font-bold text-blue-800">Startup</h2>
                    <button onClick={() => setOpen(false)} className="text-red-500 cursor-pointer font-bold text-xl">
                        ✖
                    </button>
                </div>
                <ul className="p-5 space-y-4">
                    <li className="hover:text-blue-600 cursor-pointer">الرئيسية</li>
                    <li className="hover:text-blue-600 cursor-pointer">الكورسات</li>
                    <li className="hover:text-blue-600 cursor-pointer">من نحن</li>
                    <li className="hover:text-blue-600 cursor-pointer">
                        Contact US
                    </li>
                </ul>
            </div>
        </>
    );
}
