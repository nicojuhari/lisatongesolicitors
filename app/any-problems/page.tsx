const AnyProblemsPage = () => {
    return (
        <section className="container my-12">
            <h1 className="page-title">Complaints Handling Procedure</h1>
            <p className="mb-4">I am committed to providing a high-quality legal service to all my clients. If something goes wrong, I need you to tell me about it. This will help me to improve standards. If you have any issues you wish to resolve with me, please follow the procedure set out below.</p>
            <h2 className="subtitle">Complaints Procedure Steps</h2>
            <ol className="list-decimal list-inside space-y-4 mb-6">
                <li>I will send you a letter acknowledging receipt of your complaint within three days of receiving the complaint, enclosing a copy of this procedure.</li>
                <li>I will then investigate your complaint by reviewing your matter file. If applicable, I will speak to the member of staff who acted for you, however I can only review my own work if I have dealt with the file.</li>
                <li>I will then invite you to a meeting to discuss and hopefully resolve your complaint. I will do this within 14 days of sending you the acknowledgement letter.</li>
                <li>Within 3 days of the meeting, I will write to you to confirm what took place and any solutions I have agreed with you.</li>
                <li>If you do not want a meeting, or it is not possible, I will send you a detailed written reply to your complaint, including any suggestions for resolving the matter, within 21 days of sending you the acknowledgement letter.</li>
                <li>At this stage, if you are still not satisfied, you should contact me again and I will review my decision. (I may be able to arrange for another solicitor to review the complaint and I will let you know if this is an option available to you.)</li>
                <li>I will write to you within 14 days of receiving your request for a review confirming my final position on our complaint and explaining the reasons. (If the matter is passed to another local solicitor for review, I will let you know the timescale involved.)</li>
                <li>If you are still not satisfied, you can contact the Legal Ombudsman about your complaint. Any complaint to the Legal Ombudsman must usually be made within six months of the date of our final written response to your complaint but for further information you should contact the Legal Ombudsman.</li>
            </ol>
            <h2 className="subtitle">Legal Ombudsman Contact Details</h2>
            <div className="mb-6">
                <p>Address: PO Box 6806 Wolverhampton West Midlands WV1 9WG</p>
                <p>Tel: <a href="tel:+443005550333" className="text-pink-900 underline">0300 555 0333</a></p>
                <p>Email: <a href="mailto:enquiries@legalombudsman.org.uk" className="text-pink-900 underline">enquiries@legalombudsman.org.uk</a></p>
                <p>Website: <a href="https://www.legalombudsman.org.uk" className="text-pink-900 underline">www.legalombudsman.org.uk</a></p>
            </div>
            <p className="mb-2 text-gray-700">If I have to change any of the timescales above, I will let you know and explain why.</p>
        </section>
    );
}
 
export default AnyProblemsPage;