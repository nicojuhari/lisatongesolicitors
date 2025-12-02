import CallMeComp from "@/components/CallMe";

const BusinessDocumentsPage = () => {
    return (
        <>
        <div className="container py-12">
            <h1 className="page-title">Business Documents</h1>

            <section className="mb-8">
                <h2 className="subtitle">Custom drafted, personal documents, living together?</h2>
                <p className="mb-4">As well as a Will and LPA, you may wish to consider a cohabitation agreement to set out your wishes in respect of your property and other assets.</p>
                <p className="mb-4">Such agreements save disputes later on and you can update the items covered as your life progresses.</p>
                <p className="mb-4">Ring for further information for a free, no-obligation chat about your circumstances.</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">If you are a new or existing employer</h2>
                <p className="mb-4">I can supply you with custom drafted documents. You can buy outline documents to work with, but do you know the law behind the various clauses you can choose to suit your business? Is the contract tailored to your kind of business?</p>
                <p className="mb-4">Employment law is changing at an ever increasing rate and your contracts need to be reviewed regularly in the light of the new laws. The new <span className="font-bold">Equality Act</span> is in force from 1st October 2010 – make sure you update your recruitment/interview questions.</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Do you know if your contracts of employment reflect the current holiday entitlements, or recent changes in disciplinary procedure and the minimum wage?</li>
                    <li>Are the restrictions on employees working for the competition on leaving your employment fair and reasonable and therefore enforceable?</li>
                    <li>Does the timing of the contract deal adequately with the Working Time Regulations?</li>
                </ul>
                <p className="mb-4">These are just a few examples of the areas which need careful drafting to reflect your individual business needs.</p>
            </section>

            <section className="mb-8">
                <h2 className="subtitle">Lisa Tonge will check, revise and renew your business documents</h2>
            </section>
        </div>
        <CallMeComp />
        </>
    );
}
 
export default BusinessDocumentsPage;