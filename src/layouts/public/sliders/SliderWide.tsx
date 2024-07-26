"use client";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { useUniqueKeyGenerator } from "@/hooks/useUniqueKeyGenerator";

import image1 from "../../../../public/images/html-css-hero.png";
import image2 from "../../../../public/images/html-css-pro.png";
import image3 from "../../../../public/images/imgCourse.png";
import image4 from "../../../../public/images/kien-thuc-nen-tang.png";
import image5 from "../../../../public/images/responsive.png";

const slides = [
    {
        title: "Learn programming at .BTL 1",
        description:
            "Learn programming at .BTL is very easy to learn and easy to learn about programming languages and programming languages.",
        btnContent: "Join group",
        link: "https://github.com/",
        url: image1.src,
    },
    {
        title: "Learn programming at .BTL 2",
        description:
            "Learn programming at .BTL is very easy to learn and easy to learn about programming languages and programming languages.",
        btnContent: "See more",
        link: "https://github.com/",
        url: image2.src,
    },
    {
        title: "Learn programming at .BTL 3",
        description:
            "Learn programming at .BTL is very easy to learn and easy to learn about programming languages and programming languages.",
        btnContent: "Join group",
        link: "https://github.com/",
        url: image3.src,
    },

    {
        title: "Learn programming at .BTL 4",
        description:
            "Learn programming at .BTL is very easy to learn and easy to learn about programming languages and programming languages.",
        btnContent: "Join group",
        link: "https://github.com/",
        url: image4.src,
    },
    {
        title: "Learn programming at .BTL 5",
        description:
            "Learn programming at .BTL is very easy to learn and easy to learn about programming languages and programming languages.",
        btnContent: "See more",
        link: "https://github.com/",
        url: image5.src,
    },
];

export const SliderLayout = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const generatorKey = useUniqueKeyGenerator();

    //
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    //
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    //
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    //
    useEffect(() => {
        const id = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <div className="max-w-[1400px] h-[270px] w-full m-auto relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-[8px] bg-center bg-cover duration-500"
            ></div>

            <div className="absolute top-[50%] left-24 translate-y-[-50%] text-white">
                <p className="text-4xl font-bold shadow-2xl">
                    {slides[currentIndex].title}
                </p>
                <p className="my-4 max-w-[510px] shadow-2xl">
                    {slides[currentIndex].description}
                </p>
                <div className="w-32">
                    <ButtonPrimary
                        typed="outlined"
                        href={slides[currentIndex].link}
                    >
                        {slides[currentIndex].btnContent}
                    </ButtonPrimary>
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex mt-3 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={generatorKey(slide, slideIndex)}
                        onClick={() => goToSlide(slideIndex)}
                        className={`h-2 rounded-[8px] mr-4 ${
                            slideIndex === currentIndex
                                ? "bg-[--color-primary] w-[52px]"
                                : "bg-[--color-third] w-[32px]"
                        } cursor-pointer transition-all duration-500`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
