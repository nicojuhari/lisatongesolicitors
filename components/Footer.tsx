import Link from "next/link";

const FooterComp = () => {
    return ( 
        <footer className="bg-gray-900 text-white pt-6 pb-4 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10 container">
                <div>
                    <h4 className="font-bold mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/services" title="Legal Services">Services</Link>
                        </li>
                        <li>
                            <Link href="/regulatory" title="Regulatory Information">Regulatory - SRA</Link>
                        </li>
                        <li>
                            <Link href="/privacy-and-data-protection" title="Privacy, Data Protection and Your Security">Privacy & Data Protection</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Contacts</h4>
                    <ul className="space-y-2">
                        <li>Phone: <a href="tel:+441612416118" className="underline hover:text-pink-500">0161 241 6118</a></li>
                        <li>Mobile: <a href="tel:+447840265189" className="underline hover:text-pink-500">07840 265189</a></li>
                        <li>Email: <a href="mailto:lisatonge@ltongesolicitors.com" className="underline hover:text-pink-500">lisatonge@ltongesolicitors.com</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Address</h4>
                    <ul className="space-y-2">
                        <li>30 Egerton Road,</li>
                        <li>Walkden, Worsley,</li>
                        <li>Manchester, M28 3JY</li>
                    </ul>
                </div>
            </div>
            <div className="container mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 border-t border-gray-700 pt-4">
                <p className="text-xs">
                    &copy; {new Date().getFullYear()} Lisa Tonge Solicitors. All rights reserved.
                </p>
                <p className="text-xs mt-2 opacity-40">
                    Website by <a href="https://www.nicojuhari.com" className="underline hover:text-pink-500">Nick</a>
                </p>
            </div>
        </footer>
     );
}
 
export default FooterComp;