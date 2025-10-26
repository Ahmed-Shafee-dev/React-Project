import React from "react";
import { NavLink } from "react-router-dom";
import CustomCountainer from "../customContainer/CustomCountainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Banner({ data }) {
    return (
        <>
            <section>
                <CustomCountainer>
                    <div className="xl:h-[78vh] md:h-[63vh] h-[48vh] rounded-4xl overflow-hidden">
                        <Swiper
                            effect={"fade"}
                            modules={[Autoplay, EffectFade]}
                            speed={1500}
                            autoplay={{
                                delay: 2000,
                            }}>
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="Banner relative h-[82vh]">
                                        <div className="Banner-overlay absolute top-0 left-0 w-full h-full xl:px-8 xl:py-4 md:px-7 md:py-3 px-6 py-2">
                                            <h2 className="xl:text-4xl md:text-3xl text-2xl font-medium xl:mb-4 md:mb-3 mb-2 text-amber-700">{item.title}</h2>
                                            <p className="xl:text-2xl md:text-2xl text-xl font-sans text-amber- xl:max-w-[22em] md:*:max-w-[20em] max-w-[16em]">{item.description}</p>
                                        </div>
                                        <img className="Banner-img w-full h-full" src={item.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="mt-18 mb-10">
                    <NavLink className=" text-white rounded-r-2xl bg-black text-4xl font-semibold py-2 px-4 hover:text-yellow-400 duration-300 animate-pulse" to={"/GetStarted"}>
                        Get Started
                    </NavLink>
                    </div>
                </CustomCountainer>
            </section>
        </>
    );
}
