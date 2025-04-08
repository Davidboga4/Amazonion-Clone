"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card1 from "./card1";
import Card2 from "./card2";
import SliderButtons from "./slider_buttons";

const CardComp = () => {
    const shoesImages = [
        {
            src: "https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UL320_.jpg",
            description: "EVA Lite Sport Shoes Running Shoes for Men- Blue",
        },
    ];

    const womenClothingImages = [
        {
            src: "https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL320_.jpg",
            description: "Image 1 description",
        },
        {
            src: "https://m.media-amazon.com/images/I/61Li-19vmNL._AC_UL320_.jpg",
            description: "Image 2 description",
        },
    ];

    const kidsImages = [
        {
            src: "https://m.media-amazon.com/images/I/61eUfyej30L._AC_UL320_.jpg",
            description: "Image 1 description",
        }
    ];

    const beautyImages = [
        {
            src: "https://m.media-amazon.com/images/I/71vH6IZtTqL._AC_UL320_.jpg",
            description: "Viah Instant Skin Tightening Serum for Anti Ageing",
        },
        {
            src: "https://m.media-amazon.com/images/I/717xACA8rcL._AC_UL320_.jpg",
            description: "Skinnable Sunscreen For All Skin Type Gel Spf 50+",
        },
    ];

    return (
        <div className="absolute top-68 z-10 flex flex-wrap justify-evenly w-full max-w-[90rem] gap-4">
            <Card1 title="WOMEN CLOTHING" images={womenClothingImages} />
            <Card1 title="KIDS" images={kidsImages} />
            <Card2 title="BEAUTY" images={beautyImages} />
            <Card1 title="SHOES" images={shoesImages} />
        </div>
    );
}

export default CardComp;