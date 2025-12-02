'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { StarIcon } from "@phosphor-icons/react";

import type { CarouselApi } from "@/components/ui/carousel";

const reviews = [
    {
        text: "We were always able to speak to you when necessary and you explained everything in detail",
        reviewer: "LW, Worsley",
    },
    {
        text: "Very happy with service. Always answered calls and everything was undertaken in a professional and concise manner",
        reviewer: "SH, Sale, Cheshire",
    },
    {
        text: "Great service - will be using again in the near future for our will, goes the extra mile - thanks",
        reviewer: "SM, Worsley",
    },
    {
        text: "Very good, always kept up to date",
        reviewer: "AN, Walkden",
    },
    {
        text: "Very helpful, prompt service",
        reviewer: "AK, Warrington",
    },
    {
        text: "Wonderful service, very pleased",
        reviewer: "JH, Walkden",
    },
    {
        text: "Excellent service; very good attention to detail; very thorough; very prompt responses to all correspondence, phone calls etc.",
        reviewer: "CB, Salford",
    },
    {
        text: "Lisa Tonge provides a quick, friendly service. Excellent communication through process.",
        reviewer: "AZ, Walkden",
    },
    {
        text: "The service we received was prompt and excellent in terms of good communication and attention to detail.",
        reviewer: "PJ, Astley",
    },
    {
        text: "Good communication with each step of the process, easily contactable and provided a thorough efficient service.",
        reviewer: "AD, Boothstown",
    },
    {
        text: "Excellent service.",
        reviewer: "DH, Worsley",
    },
];


const ReviewsComp = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

    useEffect(() => {
        if (!carouselApi) return;
        const interval = setInterval(() => {
            if (carouselApi && typeof carouselApi.scrollNext === "function") {
                carouselApi.scrollNext();
            }
        }, 4000); // 4 seconds
        return () => clearInterval(interval);
    }, [carouselApi]);

    return (
        <section className="container my-14 md:my-18 overflow-hidden">
            <h2 className="section-title text-center">Client Reviews</h2>
            <Carousel className="w-full relative" setApi={setCarouselApi}>
                <CarouselContent>
                    {reviews.map((review, idx) => (
                        <CarouselItem key={idx} className="flex flex-col items-center sm:basis-1/2 md:basis-1/3 p-4">
                            <div className="flex items-center mb-2" aria-label="5 star review">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} weight="fill" className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-0.5" />
                                ))}
                            </div>
                            <blockquote className="text-lg italic text-gray-800 mb-4">“{review.text}”</blockquote>
                            <p className="text-pink-900 font-semibold mt-auto">{review.reviewer}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default ReviewsComp;