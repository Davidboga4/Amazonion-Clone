import ImgComp from "./img_comp";

interface Card1Props {
    title: string;
    images: Array<{
        src: string;
        description: string;
    }>;
}

const Card2 = ({ title, images }: Card1Props) => {
    return (
        <div className="h-80 w-full bg-white shadow-md p-4 max-w-[20rem]">
            <label className="font-bold">{title}</label>
            <div className="flex pt-1">
                <ImgComp image={images[0].src} styles={'w-1/2 pr-2'} imgStyles='h-60 w-40' altDesc={'image 1'} desc={images[0].description} />
                <ImgComp image={images[1].src} styles={'w-1/2'} imgStyles={'h-60 w-40'} altDesc={'image 1'} desc={images[1].description} />
            </div>
        </div>
    );

    // return (
    //     <div className="h-80 w-80 bg-gray-50 shadow-md p-4">
    //         <label className="font-bold">{title}</label>
    //         <div className={`bg-red-100 flex flex-row flex-wrap justify-between`}>
    //             {images.map((image, index) => (
    //                 <div key={index} className="flex flex-col items-center p-2">
    //                     <img
    //                         src={image.src}
    //                         alt={`Carousel Image ${index + 1}`}
    //                         className="h-24 w-24 object-cover"
    //                     />
    //                     <label>{image.description}</label>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
}

export default Card2;