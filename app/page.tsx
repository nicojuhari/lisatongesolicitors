import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">

    <div className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
        <Image src={"/solicitor-lisa-tonge-logo.png"} alt="Lisa Tonge Solicitors Logo" width={200} height={100} />
        <p className="mt-8">
          <span className="font-bold">Lisa Tonge Solicitors</span> is currently undergoing an upgrade. <br />We&apos;re working hard to bring you a better online experience with a new website!</p>
    </div>

    <div className="max-w-4xl mx-auto mb-10 p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-800 pb-3 mb-5">
            Current Services
        </h2>
        <p className="text-gray-600 mb-4">
            While we build our new site, our full legal services remain available. Lisa Tonge is a fully qualified solicitor experienced in:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><span className="font-bold">Conveyancing</span> (Sales, Purchases, Property Transfers, Cohabitation Agreements, Help to Buy ISA bonuses)</li>
            <li><span className="font-bold">Wills and Probate</span> (including Lasting Power of Attorney for Property & Financial Affairs and Health & Welfare)</li>
            <li><span className="font-bold">Mortgages and Leases</span></li>
            <li><span className="font-bold">Legal Documents for Employers</span> and <span className="font-bold">Contracts of Employment</span> (non-contentious matters only)</li>
        </ul>
    </div>
    
    <div className="max-w-4xl mx-auto mb-10 p-6 bg-pink-800 text-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold border-b-2 border-white pb-3 mb-5">
            Contact Us for a FREE Quotation
        </h2>
        <p className="mb-4 text-gray-100">
            You can reach Lisa Tonge directly during business hours (9 a.m. to 5 p.m., Monday to Friday), with early evening and weekend appointments available by arrangement.
        </p>
        <div className="space-y-2 text-lg">
            <p>
                <span className="font-bold">Phone:</span> <a href="tel:+441612416118" className="underline hover:text-pink-200">0161 241 6118</a> (or mobile: <a href="tel:07840265189" className="underline hover:text-pink-200">07840265189</a>)
            </p>
            <p>
                <span className="font-bold">Email:</span> <a href="mailto:lisatonge@ltongesolicitors.com" className="underline hover:text-pink-200">lisatonge@ltongesolicitors.com</a>
            </p>
            <p>
                <span className="font-bold">Address:</span> 30 Egerton Road, Walkden, Worsley, Manchester, M28 3JY.
            </p>
        </div>
    </div>

    <iframe  className="mx-auto mb-10" scrolling="no" allowTransparency={true} src="https://cdn.yoshki.com/iframe/55845r.html"></iframe>

    <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded-xl shadow-md border-t-4 border-gray-400">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Regulatory Information Snapshot
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><span className="font-bold">Proprietor:</span> Mrs. Lisa Tonge, Sole Practitioner with over 20 years of experience.</li>
            <li><span className="font-bold">Regulation:</span> Authorised and Regulated by the Solicitors Regulation Authority (SRA Number 387802).</li>
            <li><span className="font-bold">Accreditation:</span> Law Society Conveyancing Quality Scheme (CQS Number 03527).</li>
            <li><span className="font-bold">Fees:</span> No VAT to pay on solicitor fees.</li>
        </ul>
    </div>
</div>
  );
}
