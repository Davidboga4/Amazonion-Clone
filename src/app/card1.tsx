import ImgComp from "./img_comp";

interface CardProps {
    title: string;
    images: Array<{
        src: string;
        description: string;
    }>;
}

const Card1 = ({ title, images }: CardProps) => {
    return (
        <div className="relative h-80 w-full shadow-md p-4 bg-white max-w-[20rem]">
            <label className="font-bold">{title}</label>
            <ImgComp
                image={images[0].src}
                styles="flex m-auto justify-center items-center"
                imgStyles="h-61 w-60"
                altDesc="image 1"
                desc={images[0].description}
            />
        </div>
    );
}

export default Card1;