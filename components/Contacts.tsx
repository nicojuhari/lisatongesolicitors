'use client';
import { DeviceMobileIcon, PhoneIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";
const ContactsComp = () => {
    return ( 
        <ul className="list-disc list-inside space-y-2 grid md:grid-cols-3">
                    <li className="text-center flex flex-col items-center gap-3">
                        <PhoneIcon size={24} className="inline-block mr-2 text-blue-900" />
                            <a href="tel:+441612416118" className="text-pink-900 underline text-lg font-semibold">0161 241 6118</a>
                    </li>
                    <li className="text-center flex flex-col items-center gap-3">
                        <DeviceMobileIcon size={24} className="inline-block mr-2 text-blue-900" />
                        <a href="tel:+447840265189" className="text-pink-900 underline text-lg font-semibold">07840 265189</a>
                    </li>
                    <li className="text-center flex flex-col items-center gap-3">
                        <PaperPlaneTiltIcon size={24} className="inline-block mr-2 text-blue-900" />
                        <a href="mailto:lisatonge@ltongesolicitors.com" className="text-pink-900 underline text-lg font-semibold">lisatonge@ltongesolicitors.com</a>
                    </li>
                </ul>
     );
}
 
export default ContactsComp;