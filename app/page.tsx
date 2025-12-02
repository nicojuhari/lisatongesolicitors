import Image from "next/image"
import Link from "next/link"
import CallMeComp from "@/components/CallMe"
import ServicesComp from "@/components/Services";
import ReviewsComp from "@/components/Reviews";
import HeroComp from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
        
    <HeroComp />
    <section className="container grid md:grid-cols-2 gap-8 my-6">
        <div className="space-y-6 text-center px-8 border p-6 bg-gray-50">
            <p> General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) Privacy Policy update</p>
            <Button asChild variant="link">
                <Link href="/privacy-and-data-protection" className="underline font-bold uppercase">
                        Read More
                </Link>
            </Button>
        </div>
        <div className="space-y-6 text-center px-8 border p-6 bg-gray-50">
            <p className="font-bold text-pink-900">NOTE</p>
            <p>
                Lisa Tonge Solicitors is the registered name of the practice with SRA, trading also as Lisa Tonge Solicitor
            </p>
        </div>
    </section>
    <ServicesComp>
        <h2 className="section-title text-center">Business and Personal Legal Services</h2>
    </ServicesComp>
    <ReviewsComp />
    <CallMeComp />
    <section>
        <div className="container grid md:grid-cols-3 gap-12 items-center my-14 md:my-18">
            <div className="text-center space-y-2 text-white">
                <Link href='/any-problems' title="Complaints Information" className="block p-4 text-pink-900 border-2 border-pink-900 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 inline-block mr-4" fill="currentColor" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                <span className="font-semibold">Complaints Information</span>
               </Link>
            </div>
            <iframe
            className="overflow-hidden w-full mx-auto"
            src="https://cdn.yoshki.com/iframe/55845r.html"
            style={{ overflow: "hidden" }}
            scrolling="no"
            title="Yoshki Regulatory Badge"
            ></iframe>
            <Image src="/conveyancing-logo.png" alt="Lisa Tonge Solicitor Office" width={300} height={200} />
        </div>

    </section>
    <section className="py-14 md:py-18 bg-gray-50">
        <div className="container">
            <h2 className="section-title text-center text-blue-900">Free Initial Meeting</h2>
            <p className="mb-4">
                Arrange a free initial appointment to discuss your individual circumstances. I will dedicate my own time to making your sale, purchase, or other transaction a success.
            </p>
            <p className="mb-4">
                I offer you my time in an initial free meeting, email correspondence or telephone call to discuss all of your options when dealing with the planning of your legal documents.
            </p>
            <p className="mb-4 texts-white">
                <span className="font-semibold">EARLY EVENING AND WEEKEND</span> appointment are available by arrangement. <br /> 
                 <span> As a valued client you will have direct telephone and/or e-mail access to me from <span className="font-semibold">9 a.m. to 5 p.m. Monday to Friday</span>.</span>
            </p>
            <p className="mt-6 text-gray-600 italic text-sm">
                *An initial meeting is used to discuss the issues involved, to take copies of your identification documents and to complete an ID form to help comply with money laundering regulations; I will also discuss what tasks are likely to be required and the likely costs involved to enable you to decide whether or not you wish to proceed. If so, fees will be charged for all subsequent work and advice at my hourly rate or at an agreed fixed fee as appropriate.
            </p>
        </div>
    </section>
    
    
    <section className="container my-12 md:my-16">
        <h2 className="section-title text-center">
            Your Trusted Legal Partner in Worsley, Manchester
        </h2>
        <ul className="space-y-4 mt-10">
            <li>
                <span className="font-bold">Conveyancing Needs:</span> Sales and purchases of property, cohabitation agreements, property transfers – all at competitive prices.
            </li>
            <li>
                <span className="font-bold">Wills and Probate:</span> Ensure your wishes are known – make your will today!
            </li>
            <li>
                <span className="font-bold">Legal Document Preparation:</span> Good preparation gives you more certainty in your financial arrangements.
            </li>
            <li>
                <span className="font-bold">Living Together:</span> Advice on pre-nuptial agreements and related issues.
            </li>
            <li>
                <span className="font-bold">Start-Up Business Documentation:</span> Support for new businesses in Worsley.
            </li>
            <li>
                <span className="font-bold">Employment Contracts*:</span> Help preparing reusable contracts for new employers.
            </li>
            <li>
                <span className="font-bold">Mortgages:</span> Handling mortgage work and conveyancing for lenders including NatWest, The Woolwich, Barclays, and RBS.
            </li>
            <li>
                <span className="font-bold">Leases:</span> Advice and drafting for small commercial premises and documents in commercial areas such as Employment and Business Law.
            </li>
        </ul>
        <p className="mt-6 text-gray-600 italic text-sm">
            *Please note: Only non-contentious employment matters are handled. For disputes, please seek a firm specialising in employment tribunal litigation.
        </p>
        <div className="mt-10 text-center text-pink-900">
            <span className="font-semibold">Why not let me help? </span>
            
             <a
                href="mailto:lisatonge@ltongesolicitors.com"
                className="inline-block underline ml-2"
            >
                Email me: lisatonge@ltongesolicitors.com
            </a>
        </div>
    </section>
    <section className="bg-gray-50">
        <div className="container p-6 py-14 md:py-18 md:text-center">
            <h3 className="section-title text-blue-900">No VAT to Pay on Fees</h3>
            <p className="mb-2">
                All costs information on this site relates to domestic property transactions and is subject to change.
            </p>
            <p>
                Please enquire concerning commercial rates and rates for Wills and Probate, where fixed fees may be agreed at the outset.
            </p>
        </div>
    </section>

    
</div>
  );
}
