import CustomCountainer from "../../customContainer/CustomCountainer";
import ShopData from "./ShopData";
import CustomTabs from "./CustomTabs";
import { useEffect, useState } from "react";
import { products } from "./data";

export default function ShopSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [filterProduct, setFilterProduct] = useState([]);
    const [myCategory, setMyCategory] = useState([]);
    const [showMore, setShowMore] = useState(true);
    let [showItemCount, setShowItemCount] = useState(6);
    function ShowMoreAndLess() {
        // console.log(filterProduct);
        setShowMore(!showMore);
        if (showMore) {
            const showAllPRoducts = filterProduct.length; //23
            // console.log(showAllPRoducts);
            setShowItemCount(showAllPRoducts);
        } else {
            setShowItemCount(6);
        }
    }
    useEffect(() => {
        if (activeTab == "All") {
            setFilterProduct(products);
        } else {
            setFilterProduct(products.filter((item) => item.category == activeTab));
        }
    }, [activeTab, showItemCount]);
    useEffect(() => {
        setShowItemCount(6);
    }, [activeTab]);
    useEffect(() => {
        const uniqueCategory = ["All", ...new Set(products.map((item) => item.category))];
        const convertCategory = uniqueCategory.map((item) => ({
            label: item,
            value: item,
        }));
        setMyCategory(convertCategory);
    }, []);
    return (
        <>
            <section className="shop-section">
                <CustomCountainer customclass="bg-gray-100 mt-1 p-2">
                    <CustomTabs data={myCategory} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="shop-section-product grid xl:grid-cols-3 md:grid-cols-1 gap-5">
                        {filterProduct.map((item, index) => showItemCount > index && <ShopData key={index} item={item} />)}
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <button
                            className="w-[8em] h-[4em] cursor-pointer bg-amber-50 border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-amber-50 duration-300 flex items-center rounded-2xl justify-center"
                            onClick={ShowMoreAndLess}>
                            {filterProduct.length > showItemCount ? "show more" : "show less"}
                        </button>
                    </div>
                </CustomCountainer>
            </section>
        </>
    );
}
