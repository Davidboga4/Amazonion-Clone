"use client";
import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSource {
    desktop: string;
    mobile: string;
}

interface CarouselProps {
    images: ImageSource[];
    interval: number; // in milliseconds
}

const CarouselSlider: React.FC<CarouselProps> = ({ images, interval }) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        startSlider();
        return () => stopSlider();
    }, [images, interval]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = currentIndex === 0 ? 'none' : 'transform 1.5s ease-in-out';
            carouselRef.current.style.transform = currentIndex === 0 ? `translateX(0%)` : `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex, transitioning]);

    const startSlider = () => {
        stopSlider(); // clear any existing interval
        timeoutRef.current = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % images.length;
                    return nextIndex;
                });
                setTransitioning(false);
            }, 1500);
        }, interval);
    };

    const stopSlider = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const goToPrevious = () => {
        stopSlider();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        stopSlider();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const [startX, setStartX] = useState<number | null>(null);
    const [startY, setStartY] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX === null || startY === null) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const deltaX = endX - startX;
        const deltaY = endY - startY;

        // Make sure it's a horizontal swipe (not vertical)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            deltaX > 0 ? goToPrevious() : goToNext();
        }

        // Reset
        setStartX(null);
        setStartY(null);
    };

    return (
        <div className="relative w-full">
            <div className="absolute top-0 h-62 flex left-3 px-1 hidden sm:flex flex items-center justify-center rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1 z-10" onClick={goToPrevious}>
                <ChevronLeft className="text-black" size={54} strokeWidth={1} />
            </div>

            <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out -z-1 cursor-pointer">
                {images.map((image: any, index) => (
                    // <img
                    //     key={index}
                    //     src={image['desktop']}
                    //     alt={`Carousel Image ${index + 1}`}
                    //     className="home_image cursor-pointer object-cover h-150"
                    //     onClick={() => {
                    //         // Handle click event here if needed
                    //     }}
                    // />
                    <picture key={index} className={`w-full flex-shrink-0 home_image`} style={{ flexBasis: "100%" }}>
                        <source media="(min-width: 639px)" srcSet={image['desktop']} />
                        <img src={image['mobile']} alt="Responsive" className="w-full h-100 object-fill cursor-pointer object-cover h-150"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        />
                    </picture>
                ))}
            </div>

            <div className="absolute top-0 h-62 right-3 flex justify-between px-1 hidden sm:flex flex items-center justify-center rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1 z-10" onClick={goToNext}>
                <ChevronRight className="text-black" size={54} strokeWidth={1} />
            </div>
            {/* <SliderButtons
                goToPrevious={goToPrevious}
                goToNext={goToNext}
            /> */}
        </div>
    );
}
export default CarouselSlider;