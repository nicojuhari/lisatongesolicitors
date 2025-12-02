import CallMeComp from "@/components/CallMe";

export const metadata = {
    title: "Wills & Probate | Lisa Tonge Solicitors Worsley",
    description: "Wills, probate, and power of attorney services by Lisa Tonge Solicitors. Local legal help in Worsley, Manchester.",
};

const WillsAndProbatePage = () => {
    return (
        <>  
        <div className="container my-12">
            <h1 className="page-title">Wills &amp; Probate</h1>

            <section className="mb-8">
                <p className="mb-4">It&apos;s a well known fact - many of you have not made a Will.</p>
                <p className="mb-4">You may expect that all of your assets will pass to your nearest and dearest. However, the laws which apply to <span className="font-bold">intestacy</span> (i.e. having no Will or a Will that is incorrectly drawn or witnessed) are complicated and often have unexpected consequences. For example, if you are not married to your partner, he or she may not be entitled automatically to any of your estate including a whole range of financially valuable assets, if you rely on the common law.</p>
                <p className="mb-4">If you ask a solicitor to make your Will now, you can be more certain that your wishes will be carried out.</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">Lasting Power of Attorney Fees</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><span className="font-bold">Property and Financial Affairs:</span> One off fee of £395 per individual, plus OPG registration fees and expenses paid on your behalf.</li>
                    <li><span className="font-bold">Health and Welfare:</span> One off fee of £395 per individual, plus OPG registration fee and expenses paid on your behalf.</li>
                    <li><span className="font-bold">Both documents at the same time:</span> One off fee of £750 plus OPG registration fees and expenses paid on your behalf.</li>
                </ul>
                <p className="mb-2">Fees include completing the application to register and notice to anyone named in the application.</p>
                <p className="text-sm italic">Please note that the Office of the Public Guardian charges a registration fee of £110.00 per document.</p>
            </section>
        </div>
        <CallMeComp  />
        </>
    );
}
 
export default WillsAndProbatePage;