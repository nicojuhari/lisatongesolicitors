import Image from "next/image";

const ConveyancingQuality = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-center">
            <ul className="list-disc list-isnside text-gray-700 space-y-2 pl-4">
                <li>Please note that I am a sole practitioner and as such there is no list of partners appropriate to this practice: <span className="font-bold">Recognised Sole Practitioner.</span></li>
                <li>My firm is accredited in the Law Society Conveyancing Quality Scheme: <span className="font-bold">CQS Number 03527.</span></li>
                <li>Authorised and Regulated by the Solicitors Regulation Authority: <span className="font-bold">SRA Number 387802.</span></li>
            </ul>
            <Image src='/conveyancing-logo.png' alt="Conveyancing Quality Scheme Logo" width={400} height={100} className="mx-auto" />
        </div>
     );
}
 
export default ConveyancingQuality;