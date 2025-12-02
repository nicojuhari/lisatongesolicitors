import CallMeComp from "@/components/CallMe";

export const metadata = {
    title: "Conveyancing Services | Lisa Tonge Solicitors Worsley",
    description: "High quality conveyancing services for property sales and purchases in Worsley, Manchester.",
};

export default function ConveyancingPage() {
            return (
                <>
                <div className="container my-12">
                    <h1 className="page-title">Conveyancing</h1>
                    <section className="mb-8">
                        <h2 className="subtitle">High Quality Independent Conveyancing Services At Your Convenience</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Direct telephone access to your experienced Solicitor</li>
                            <li>Calls taken immediately or returned the same day</li>
                            <li>Regular written updates on the progress of your transaction</li>
                            <li>Written and verbal reports on the title documents and search results at your convenience</li>
                            <li>Prompt action and a response to all letters on the day the letter is received whenever possible</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="subtitle">5 Good Reasons to Use a Qualified Solicitor</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Solicitors are strictly regulated by the <span className="font-bold">Solicitors Regulation Authority (SRA)</span>, the regulatory arm of the Law Society</li>
                            <li>Solicitors who break the accounts rules with regard to client moneys are liable to be struck off the Solicitors&apos; Roll of membership of the Law Society. See my membership details at the Law Society website. Solicitors&apos; accounts must be checked annually by an independent accountancy firm who report their findings to the SRA.</li>
                            <li>We are obliged to take out <span className="font-bold">professional indemnity insurance</span>, in case anything goes wrong and you suffer financial losses as a result of a solicitor&apos;s negligence.</li>
                            <li>All Solicitors are obliged to complete the <span className="font-bold">Legal Practice Course*</span> (I was awarded a Commendation by the Chester College of Law) and to complete 2 years of practical training before they are fully qualified as a Solicitor. I stayed with my training firm of Robin Burman &amp; Co Solicitors in Chorlton-cum-Hardy for 5 and a half years before setting up my own practice in 2003.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="subtitle">Are My Services More Expensive?</h2>
                        <p className="mb-2">No, my fees are competitively structured and are similar to other conveyancers in the area. <span className="font-bold">There is no VAT to pay on my fees.</span> I am not registered for VAT as I deal with low volumes of work and can dedicate myself to your transaction as is necessary.</p>
                        <p className="text-sm italic mb-2">*Older solicitors may have taken Law Society Finals, prior to the introduction of the LPC.</p>
                        <p className="text-sm italic">* Suppliers of searches and other expenses may charge VAT and this will be included in the cost of any expenses which I pay on your behalf (previously called disbursements).</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="subtitle">Services Offered in Property Purchase</h2>
                        <p className="mb-2">If you are buying a property, the costs quoted will include the following stages:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Meeting you to discuss your priorities / keeping you informed by email or telephone</li>
                            <li>Commissioning all necessary searches (if not in the HIP) and reporting to you on the results</li>
                            <li>Checking and approving the Contract</li>
                            <li>Reviewing the Title Documents and reporting to you on rights and obligations relating to the purchase property, both in writing and in a face to face meeting at this office</li>
                            <li>Raising necessary enquiries with the Seller&apos;s solicitors and others</li>
                            <li>Drafting the Transfer Deed</li>
                            <li>Explaining key points arising from all documents and taking your signatures to the Contract, Transfer Deed and Mortgage Deed (if any)</li>
                            <li>Reporting to your mortgage lender and request for funds (if any)</li>
                            <li>Preparing a financial statement and bill for your approval prior to exchange of contracts</li>
                            <li>Exchanging contracts</li>
                            <li>Preparing for completion, including final Land Registry Searches</li>
                            <li>Completing your purchase</li>
                            <li>Completion and submission of your Stamp Duty form to HMRC</li>
                            <li>Registration of the transfer into your name(s) at the Land Registry</li>
                        </ul>
                        <p className="mt-4 font-medium">Are the terms used above new to you? <span className="font-bold">I am happy to explain!</span></p>
                    </section>

                    <section className="mb-8">
                        <h2 className="subtitle">Independent Service</h2>
                        <p>I operate independently of the estate agents and other volume conveyancers. You are free to choose any solicitor, whoever the estate agent, buyer, seller, or other contributor to the process such as your mortgage broker may be.</p>
                    </section>
                </div>
                    <CallMeComp />
                </>
            );
        }