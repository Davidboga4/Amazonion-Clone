const ImgComp = ({ image, altDesc, desc, styles, imgStyles }: any) => {
    return (<>
        <div className={`${styles} flex flex-col`}>
            <img
                key={image}
                src={image}
                alt={altDesc}
                className={`object-fill rounded-md cursor-pointer ${imgStyles}`}
            />
            {/* <label className="truncate">{desc}</label> */}
            <label className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {desc}
            </label>
        </div>
    </>);
}

export default ImgComp;