import CarouselSlider from "./carousel_slider";
import CardComp from "./card_comp";

interface Image {
    mobile: string;
    desktop: string;
}

const CarouselComp = () => {
    const images: Image[] = [
        {
            'mobile': 'https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/Xiaomi/2/D212431502_IN_WLD_Xiaomi15_New-Launch_Category_page_hero._SX1035_QL85_FMpng_.png',
            'desktop': 'https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/HSS/April/GW/RV/5300-Kitchen---HSS-Hero---April25_1_1500X600._CB546844101_.jpg'
        },
        {
            'mobile': 'https://m.media-amazon.com/images/G/31/img19/Wireless/Jupiter19/DealReveal/Xiaomi/Updated/New__Redmi7._CB1198675309_.jpg',
            'desktop': 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Meghana/GW/PC/3000/1118._CB546844321_.jpg'
        },
        {
            'mobile': 'https://m.economictimes.com/thumb/msid-94386942,width-1200,height-900,resizemode-4,imgsize-37346/amazon-sale-today-live-offers-best-deals-on-amazon-great-indian-festival-sale.jpg',
            'desktop': 'https://images-eu.ssl-images-amazon.com/images/G/31/img25/Wireless/Madhav/march/EPL/Apple/D222749676_EPL25-iPhone_15DesktopHero_3000x1200._CB548292813_.jpg'
        },
        {
            'mobile': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWToHFdSHid3iYXWUSEyiyuEGfQSXElCp095sb38NxoumYHMDPZ15I22mn1mi-erR0qU&usqp=CAU',
            'desktop': 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU25/travel/Train_PC-Hero-Template_GW_3000x1200._CB547753469_.jpg'
        },
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/HSS/April/GW/RV/5300-Kitchen---HSS-Hero---April25_1_1500X600._CB546844101_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Meghana/GW/PC/3000/1118._CB546844321_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img25/Wireless/Madhav/march/EPL/Apple/D222749676_EPL25-iPhone_15DesktopHero_3000x1200._CB548292813_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU25/travel/Train_PC-Hero-Template_GW_3000x1200._CB547753469_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/CLP/2025/1April/D212311208_Update_DesktopHeroTemplate_3000x1200._CB546943620_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2025/April/HSS/pc/Office__gaming_chairs_-_PC-3000x1200._CB546846677_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/gamingfest/Gaming_Fest-PC-GW_2._CB546990797_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Mar/updated/final/881._CB546834076_.png',
        // 'https://m.media-amazon.com/images/I/81mKbWWV8wL._SX3000_.jpg',
        // 'https://images-eu.ssl-images-amazon.com/images/G/31/Ma2025/Mar/EthnicWeek/Hero/GW/3000/Generic_tshirts_._CB546889414_.jpg'
    ];
    const mobileImages: string[] = [
        'https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/Xiaomi/2/D212431502_IN_WLD_Xiaomi15_New-Launch_Category_page_hero._SX1035_QL85_FMpng_.png',
        'https://m.media-amazon.com/images/G/31/img19/Wireless/Jupiter19/DealReveal/Xiaomi/Updated/New__Redmi7._CB1198675309_.jpg',
        'https://m.economictimes.com/thumb/msid-94386942,width-1200,height-900,resizemode-4,imgsize-37346/amazon-sale-today-live-offers-best-deals-on-amazon-great-indian-festival-sale.jpg'
    ];

    return (
        <div>
            {/* Carousel + Card (for tablet and desktop) */}
            <div className="h-150 overflow-hidden">
                <CarouselSlider images={images} interval={5000} />

                {/* Show CardComp only on sm (640px) and up */}
                <div className="hidden sm:block">
                    <CardComp styles={'absolute top-68'}/>
                </div>
            </div>

            {/* Show CardComp only on mobile (below 640px) */}
            <div className="block sm:hidden">
                <CardComp styles={'relative mt-5'}/>
            </div>
        </div>
    );
}

export default CarouselComp;