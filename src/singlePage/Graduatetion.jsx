import React, { useState } from "react";
import { MdOutlineExitToApp } from "react-icons/md";

export default function Graduatetion({ data }) {
    const [pupop, setPopup] = useState(false);
    return (
        <>
            <section className="bg-amber-800 rounded-2xl h-[40vh] overflow-hidden" onClick={() => setPopup(!pupop)}>
                <img className="cursor-pointer" src={data.img} alt="" />
                <h2>{data.name}</h2>
                <span>{data.age}</span>
                {pupop && (
                    <div className="fixed flex items-center justify-center z-20 w-full h-full bg-[rgba(0,0,0,0.6)] top-0 left-0">
                        <div className="max-w-2xl relative w-[80%] bg-white rounded-2xl p-7">
                            <button className="absolute top-2 right-1.5" onClick={() => setPopup(!pupop)}>
                                <MdOutlineExitToApp color="black" className="hover:text-indigo-600 cursor-pointer " size={20} />
                            </button>
                            <div className="flex gap-2"></div>
                            <img src={data.img} className="w-[20vh] h-[20vh] rounded-2xl" alt="" />
                            <div className="flex flex-col gap-1.5"></div>
                            <h3 className="font-bold text-xl">name : {data.name}</h3>
                            <span>age : {data.age}</span>
                            <p>graduatetions year : {data.graduatetionYears}</p>
                            <span>certificate : {data.certificate}</span>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
