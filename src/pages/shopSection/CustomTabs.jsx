import clsx from "clsx";
import React from "react";

export default function CustomTabs({ data, setActiveTab, activeTab }) {
    return (
        <>
            <div className="flex xl:gap-4 md:gap-3 gap-2">
                {data.map((item, index) => (
                    <span
                        key={index}
                        className={clsx("px-4 py-2 cursor-pointer rounded-full border border-gray-400", { "bg-blue-400 text-white": activeTab == item.value })}
                        onClick={() => setActiveTab(item.value)}>
                        {item.label}
                    </span>
                ))}
            </div>
        </>
    );
}
