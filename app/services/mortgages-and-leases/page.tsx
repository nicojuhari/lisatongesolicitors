import CallMeComp from "@/components/CallMe";

export const metadata = {
    title: "Mortgages & Leases | Lisa Tonge Solicitors Worsley",
    description: "Expert mortgage and lease legal services by Lisa Tonge Solicitors, serving Worsley, Manchester.",
};

const MortgagesPage = () => {
    return (
        <>
        <div className="container my-12">
            <h1 className="page-title">Mortgages &amp; Leases</h1>

            <section className="mb-8">
                <p className="mb-4">This means that you may add <span className="font-bold">HSBC</span> and <span className="font-bold">Yorkshire Bank</span> to the list of lenders I can work for directly without dual representation. Other lenders happy to work with me are <span className="font-bold">NatWest</span>, <span className="font-bold">Barclays (the Woolwich)</span>, <span className="font-bold">Royal Bank of Scotland</span> and <span className="font-bold">Nationwide</span>. Now that I have CQS accreditation, I am applying to other lenders to be restored to the panels even though I am a sole practitioner.</p>
                <p className="mb-4">I never give up the fight to be recognised by all lenders as I have worked successfully in conveyancing as both trainee and fully qualified solicitor for over 20 years.</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">I Can Sell Your Property and Redeem Your Mortgage Without Reference to the Lender&apos;s Solicitor</h2>
                <p className="mb-4">If I am selling your property for you, the lender may not prevent the Seller from obtaining their own redemption statement and authorising me to repay the mortgage on completion out of the sale proceeds - even though the lender may tell you that you must use their solicitor to redeem the mortgage. Most lenders are happy for me to redeem the mortgage on your behalf. Those such as Lloyds TSB who say you must use their representative are wrong to say this as the “equity of redemption” in the law means that the lender cannot unreasonably refuse to redeem your mortgage if it is repaid in accordance with the required sum for repayment including all administration fees.</p>
                <p className="mb-4">I may not act for the lender unless they wish me to do so, but this does not prevent me from redeeming your mortgage for you. If the lender does not wish me to act as its agent, this is the lender&apos;s loss, and does not affect you as the Seller – the only drawback is that you must telephone them twice to obtain a statement for repayment information at the start of the sale and a final redemption statement at the end. I have seen that the lender&apos;s solicitor may ask you to do this in any case when they are acting for the lender in a mortgage or re-mortgage.</p>
                <p className="mb-4">No doubt, borrowers will eventually recognise all of the disadvantages of being forcefully persuaded to use the lender&apos;s conveyancers and will insist on their right to appoint their own experienced and local representative in whom they have confidence, and who will be available and will regularly update them and explain matters by email or telephone throughout the process.</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">Share Your Experience</h2>
                <p className="mb-4">Why not tweet me (see my Twitter address below) with your comments and opinions on this issue. I would love to hear from you. Has a lender tried to put you off using my services?</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">Important Notice</h2>
                <p>You may have heard that certain mortgage lenders are not allowing sole practitioner solicitors onto their panels — if you think this means you cannot choose the solicitor you know, please read on...</p>
            </section>
        </div>
        <CallMeComp />
        </>
    );
}
 
export default MortgagesPage;