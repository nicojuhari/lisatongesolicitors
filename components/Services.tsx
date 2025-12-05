"use client";
import Link from "next/link";
import { HouseIcon, PresentationChartIcon, ArchiveIcon, BankIcon } from "@phosphor-icons/react";

const ServicesComp = ({ children } : { children: React.ReactNode }) => {

    const links = [
        {
            title: "Conveyancing",
            link: "/services/conveyancing",
            icon: HouseIcon
        },
        {
            title: "Wills and Probate",
            link: "/services/wills-and-probate",
            icon: ArchiveIcon
        },
        {
            title: "Business Documents",
            link: "/services/business-documents",
            icon: PresentationChartIcon
        },
        {
            title: "Mortgages and Leases",
            link: "/services/mortgages-and-leases",
            icon: BankIcon
        },
    ]
    return ( 
        <section className="container my-14 md:my-18">
            { children}
            <ul className="text-center grid md:grid-cols-2 gap-4 md:gap-8">
                {links.map((service) => (
                    <li key={service.link} className="flex-1 w-full bg-gray-50 rounded">
                        <Link href={service.link} className="flex flex-col gap-4 items-center hover:underline py-8 md:p-6">
                            { service.icon && <service.icon weight="light" className="inline-block text-blue-800 w-8 h-8 md:w-10 md:h-10" /> }
                            <span className="md:text-lg">{service.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="text-center mt-10 text-sm md:text-base">
                 <strong>Lisa Tonge Solicitors</strong> is registered with Lender Exchange and Lisa can also act in dealing with <strong>Help to Buy ISA bonuses.</strong>
            </p>
        </section>
    );
}
 
export default ServicesComp;