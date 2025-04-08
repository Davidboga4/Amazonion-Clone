"use client";
import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    images: string[];
    interval: number; // in milliseconds
}

const CarouselSlider: React.FC<CarouselProps> = ({ images, interval }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const carouselRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTransitioning(false);
            }, 500); // Match transition duration
        }, interval);

        return () => stopSlider();
    }, [images, interval]);

    useEffect(() => {
        // if (carouselRef.current) {
        //   if (transitioning) {
        //     carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        //   } else {
        //     carouselRef.current.style.transition = 'none';
        //   }
        //   carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        //   }
        if (carouselRef.current) {
            carouselRef.current.style.transition = currentIndex == 0 ? 'none' : 'transform 1.5s ease-in-out';
            carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex, transitioning]);

    // useEffect(() => {
    //     startSlider();
    //     return () => stopSlider();
    // }, [images, interval]);

    // const startSlider = () => {
    //     console.log('***', 'START');
    //     timeoutRef.current = setTimeout(() => goToNext(), interval);
    // };

    const stopSlider = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // useEffect(() => {
    //     if (carouselRef.current) {
    //         carouselRef.current.style.transition = currentIndex == 0 ? 'none' : 'transform 0.5s ease-in-out';
    //         carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    //     }
    // }, [currentIndex]);

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

    return (
        <div className="relative w-full">
            <div className="absolute top-0 h-62 flex left-3 px-1 hidden sm:flex flex items-center justify-center rounded-lg m-1 cursor-pointer active:bg-white active:opacity-20 active:ring-1 z-10" onClick={goToPrevious}>
                <ChevronLeft className="text-black" size={54} strokeWidth={1} />
            </div>

            <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out -z-1 cursor-pointer">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Carousel Image ${index + 1}`}
                        className="home_image cursor-pointer object-fill h-150"
                        onClick={() => {
                            // Handle click event here if needed
                        }}
                    />
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