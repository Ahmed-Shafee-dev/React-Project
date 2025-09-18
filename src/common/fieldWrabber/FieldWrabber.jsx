import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { IoLockClosedSharp, IoLockOpen } from "react-icons/io5";

export default function FieldWrabber({ name, label, type, icon,size,color, isdefault, ispassword, isnumber, isaddress }) {
    const [showpassword, useshowpassword] = useState(false);
    return (
        <div className="FieldWrabber mb-3 relative">
            <label htmlFor={name}>{label}</label>
            {isdefault && (
                <>
                    <div className="field-icon absolute right-3.5 top-[2.1em]">{icon}</div>
                    <Field name={name} type={type} className="border outline-1 mb-0.5 w-full h-10 rounded-full ps-6" placeholder="Enter your email address" />
                </>
            )}
            {isnumber && (
                <>
                    <div className="field-icon absolute right-3.5 top-[2.1em]">{icon}</div>
                    <Field name={name} type={type} className="border outline-1 mb-0.5 w-full h-10 rounded-full ps-6" placeholder="Enter your phone number" />
                </>
            )}
            {ispassword && (
                <>
                    <Field name={name} type={showpassword ? "text" : "password"} className="border mb-0.5 w-full outline-1 h-10 rounded-full ps-6" placeholder="Enter your password" />
                    <div className="field-icon absolute right-3.5 top-[2.1em]" onClick={() => useshowpassword(!showpassword)}>
                        {showpassword ? <IoLockOpen size={size} color={color} /> : <IoLockClosedSharp size={size} color={color} />}
                    </div>
                </>
            )}
            {isaddress && (
                <>
                    <div className="field-icon absolute right-3.5 top-[2.1em]">{icon}</div>
                    <Field name={name} type={type} className="border outline-1 mb-0.5 w-full h-10 rounded-full ps-6" placeholder="Enter your phone number" />
                </>
            )}
            <ErrorMessage name={name} component="p" className="text-red-500" />
        </div>
    );
}
