import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderButtons = ({ goToPrevious, goToNext }: any) => {
    return (
        <div className="absolute top-0 h-62 w-full flex justify-between px-4 hidden sm:flex">
            <div className="flex items-center justify-center rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1" onClick={goToPrevious}>
                <ChevronLeft className="text-black" size={54} strokeWidth={1} />
            </div>
            <div className="flex items-center justify-center rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1" onClick={goToNext}>
                <ChevronRight className="text-black" size={54} strokeWidth={1} />
            </div>
        </div>
        // <>
        //     <div
        //         className="absolute top-20 left-4 transform -translate-y-1/2 flex items-center justify-center 
        //                    bg-red-300 rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1 z-10"
        //         onClick={goToPrevious}
        //     >
        //         <ChevronLeft className="text-black" size={54} strokeWidth={1} />
        //     </div>

        //     <div
        //         className="absolute top-20 right-4 transform -translate-y-1/2 flex items-center justify-center 
        //                    bg-red-300 rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1 z-10"
        //         onClick={goToNext}
        //     >
        //         <ChevronRight className="text-black" size={54} strokeWidth={1} />
        //     </div>
        //     </>
    );
}

export default SliderButtons;