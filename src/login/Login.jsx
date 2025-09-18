import React, { useState } from 'react'
import NavbarLogin from '../navbar/NavbarLogin';
import CustomContainer from '../customContainer/CustomCountainer';
import { Form, Formik } from 'formik';
import FieldWrabber from '../common/fieldWrabber/FieldWrabber';
import { LuUserRound } from 'react-icons/lu';
import { validationsYup } from '../validations/Validations';
import { useNavigate } from 'react-router-dom';
import { FcAddressBook } from 'react-icons/fc';
import { FaPhone } from 'react-icons/fa';

export default function Login() {
    const navegate = useNavigate();
    const [isloding, setisloding] = useState(false);
    const initialValues = {
        Email: "",
        Password: "",
    };
    const onsubmit = (value) => {
        localStorage.setItem("user info", JSON.stringify(value));
        location.replace("/home");
        setisloding(true);
        setTimeout(() => {
            setisloding(false);
            navegate("/home");
        }, 1000);
    };
    function checkUser() {
        if (localStorage.getItem("user info") != null) {
            location.href = "/home";
        }
    }
    checkUser();
    return (
        <>
            <NavbarLogin />
            <section className="h-[92.6vh] bg-slate-100 flex justify-center items-center">
                <CustomContainer customClass={"w-[50%]"}>
                    <h2 className="font-medium text-5xl absolute top-20 left-171 ">Join us</h2>
                    <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationsYup}>
                        <Form>
                            <FieldWrabber name="Email" label="Email Address" type={"Email"} icon={<LuUserRound size={21} color="blue" />} isdefault />
                            <FieldWrabber name="Number" label="Phone Number" type={""} icon={<FaPhone size={21} color="blue" />} isnumber />
                            <FieldWrabber name="Address" label="Address" type={"text"} icon={<FcAddressBook size={21} />} isaddress />
                            <FieldWrabber name="Password" label="Password" type={"password"} ispassword={true} size={20} color="blue" />
                            <button className="mt-3 py-1 cursor-pointer hover:bg-blue-700 transition w-[5.5em] bg-blue-500 absolute rounded-full" type="submit" disabled={isloding}>{`${
                                isloding ? "Loding..." : "Login"
                            }`}</button>
                        </Form>
                    </Formik>
                </CustomContainer>
            </section>
        </>
    );
}
