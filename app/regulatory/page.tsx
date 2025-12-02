
export const metadata = {
    title: "Regulatory Information | Lisa Tonge Solicitors Worsley",
    description: "Regulatory details for Lisa Tonge Solicitors. SRA registered sole practitioner in Worsley, Manchester.",
};

const RegulatoryPage = () => {
    return (
        <div className="container my-12">
            <h1 className="text-2xl font-semibold mb-8 text-center">Regulatory Information</h1>
            <p className="mb-4 text-gray-700">
                I am required by the provisions of recent European legislation and my professional body to provide you with the following information, which you may find useful:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 mb-6">
                <li>I am registered with the Solicitors Regulation Authority as a recognised sole practitioner.</li>
                <li>
                    <span className="font-bold">Professional Rules of Conduct for Solicitors:</span> Solicitors are regulated by the Solicitors Regulation Authority (SRA). The professional rules which apply to me are set out in the Solicitors&apos; Code of Conduct which is available to view at the SRA website <a href="https://www.sra.org.uk/solicitors/solicitors.page" className="text-pink-700 underline">sra.org.uk/solicitors/solicitors.page</a>.
                </li>
                <li>
                    <span className="font-bold">Service Issues:</span> I am committed to providing a high-quality legal service to all my clients. If something goes wrong, I need you to tell me about it. This will help me to maintain and improve high standards.
                </li>
                <li>
                    If you have any complaint about my service during the course of the transaction, please do not hesitate to discuss this with me direct, so that we may resolve any issues. If you still have any complaint about my service the Legal Ombudsman now handles legal complaints. You will find information concerning the Legal Ombudsman at <a href="https://www.legalombudsman.org.uk" className="text-pink-700 underline">www.legalombudsman.org.uk</a>. Please be assured that I will do my best to provide a satisfactory service and that I will be available to discuss your transaction throughout. Any complaint to the Legal Ombudsman must usually be made within six months of the date of our final written response to your complaint, but for further information you should contact the Legal Ombudsman.
                </li>
            </ul>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Legal Ombudsman Contact Details</h2>
            <div className="mb-6 text-gray-700">
                <p>Legal Ombudsman PO Box 6806 Wolverhampton West Midlands WV1 9WJ</p>
                <p>Tel: <a href="tel:+443005550333" className="text-pink-700 underline">0300 555 0333</a></p>
                <p>Email: <a href="mailto:enquiries@legalombudsman.org.uk" className="text-pink-700 underline">enquiries@legalombudsman.org.uk</a></p>
            </div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Professional Indemnity Insurance</h2>
            <div className="mb-6 text-gray-700">
                <p>A copy of my certificate of professional indemnity insurance may be viewed at my office at:</p>
                <p className="font-bold">30 Egerton Road, Worsley, M28 3JY.</p>
            </div>
            <p className="mb-2 text-gray-700">You may contact the Solicitors Regulation Authority if you wish to view the Solicitors&apos; Code of Conduct or contact the Legal Ombudsman in the event of any complaints which we are unable to resolve together.</p>
            <div className="flex flex-col gap-2">
                <a href="https://www.sra.org.uk/home/home.page" className="text-pink-700 underline">sra.org.uk/home/home.page</a>
                <a href="https://www.legalombudsman.org.uk" className="text-pink-700 underline">www.legalombudsman.org.uk</a>
            </div>
        </div>
    );
}
 
export default RegulatoryPage;