'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { PhoneIcon } from "@phosphor-icons/react";

const HeroComp = () => {
    return (
        <section className="hero bg-gray-100 text-white py-28 md:py-42 relative overflow-hidden">
            <div className="inset-0 absolute" style={{backgroundImage: "url('/lisa-tonge-solicitors-manchester-hero-banner.webp')", backgroundSize: "cover", backgroundPosition: "left"}}></div>
            <div className="absolute inset-0 bg-gray-950/70"></div>
            <div className="container relative font-medium text-center">
                <h1 className="text-4xl md:text-5xl mb-4">
                    Lisa Tonge Solicitors <span className="text-[35%] block font-normal mt-2 text-gray-300">Your Legal Partner in Worsley, Manchester</span>
                </h1>
                <p className="md:max-w-[600px] mx-auto text-gray-300 mt-12">
                I am a fully qualified solicitor experienced in Conveyancing, Wills and Probate, Mortgages and Leases, Business Documents and More ...
                </p>
                <div className="mt-8 md:mt-12 flex justify-center gap-4 flex-wrap">
                    <Button asChild>
                    <Link  href="tel:+441612416118">
                        <PhoneIcon size={22} className="inline-block ml-2" /> 
                        <span className="inline-block mr-2">0161 241 6118</span></Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="/fees/lisa_tonge_solicitors_fees_2025.pdf" title="See My Fees 2025" target="_blank">See My Fees 2025</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
 
export default HeroComp;