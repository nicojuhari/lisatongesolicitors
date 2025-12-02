'use client';
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";

const CallMeComp = () => {
    return (
        <section className="bg-black py-12">
            <div className="container text-white grid md:grid-cols-2 gap-8 items-center">
                <Image src="/call-me-for-your-free-quotation.jpg" alt="Call Me" width={500} height={300} />
                <div className="md:pl-10">
                    <h2 className="section-title">Call Me For Your Free Quotation</h2>
                    <div className="mb-8 space-y-2">
                        <p>If you have any questions, please telephone me direct or email.</p>
                        <p>There&apos;s no obligation if you just call, and I am available 9-5 daily (when not in meetings).</p>
                        <p>I will return your call if you have to leave a message.</p>
                    </div>
                    <Button asChild>
                    <Link  href="tel:+441612416118">
                        <PhoneIcon size={22} className="inline-block ml-2" /> 
                        <span className="inline-block mr-2">0161 241 6118</span></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
 
export default CallMeComp;