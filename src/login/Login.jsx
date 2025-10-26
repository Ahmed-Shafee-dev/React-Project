import React, { useState } from "react";
import NavbarLogin from "../navbar/NavbarLogin";
import CustomContainer from "../customContainer/CustomCountainer";
import { Form, Formik } from "formik";
import FieldWrabber from "../common/fieldWrabber/FieldWrabber";
import { LuUserRound } from "react-icons/lu";
import { loginSchema, signUpSchema } from "../validations/Validations";
import { useNavigate } from "react-router-dom";
import { FcAddressBook } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    // const [logsuccess, setLogSuccess] = useState(false)

    const initialValues = {
        Email: "",
        Password: "",
        Number: "",
        Address: "",
    };

    const onSubmit = (value) => {
        localStorage.setItem("user info", JSON.stringify(value));
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/home");
        }, 1000);
    };
    useNavigate()
    function checkUser() {
        if (localStorage.getItem("user info") != null) {
            location.href = "/home";
        }
    }
    checkUser();

    return (
        <>
            <NavbarLogin />
            <section className="h-[calc(100vh-3.5em)] bg-slate-100 flex justify-center items-center ">
                <CustomContainer >
                    <h2 className="font-medium xl:text-5xl md:text-4xl text-3xl xl:mb-[2.8em] md:mb-[2.8em] mb-[2em]  md:ml-[1.5em] ml-[3.2em]">{isSignUp ? "Sign Up" : "Login"}</h2>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={isSignUp ? signUpSchema : loginSchema}>
                        <Form>
                            <FieldWrabber name="Email" label="Email" type={"Email"} icon={<LuUserRound size={21} color="blue" />} isdefault />

                            {isSignUp && (
                                <>
                                    <FieldWrabber name="Number" label="Phone Number" type={"text"} icon={<FaPhone size={21} color="blue" />} isnumber />
                                    <FieldWrabber name="Address" label="Address" type={"text"} icon={<FcAddressBook size={21} />} isaddress />
                                </>
                            )}

                            <FieldWrabber name="Password" label="Password" type={"password"} ispassword={true} size={20} color="blue" />

                            <button className="mt-3 py-1 cursor-pointer hover:bg-blue-700 transition w-[6.5em] bg-blue-500 absolute rounded-full" type="submit">
                                {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
                            </button>
                        </Form>
                    </Formik>

                    <p className="mt-16 flex flex-col">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        <span className="text-blue-600 cursor-pointer w-fit" onClick={() => setIsSignUp(!isSignUp) || setIsLogin(!isLogin)}>
                            {isSignUp ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </CustomContainer>
            </section>
        </>
    );
}
