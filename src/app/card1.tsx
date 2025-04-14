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
        <div className="h-80 w-full bg-white shadow-md p-4 max-w-[20rem] min-w-[15rem]">
            <label className="font-bold overflow-hidden text-ellipsis">{title}</label>
            <ImgComp
                data-testid="img-comp"
                image={images[0].src}
                styles="flex m-auto justify-center items-center"
                imgStyles="h-61 w-full"
                altDesc="image 1"
                desc={images[0].description}
            />
        </div>
    );
}

export default Card1;