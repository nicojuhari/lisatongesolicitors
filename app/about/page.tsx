import ConveyancingQuality from "@/components/ConveyancingQuality";

export const metadata = {
    title: "About Lisa Tonge Solicitors from Worsley Manchester",
    description: "Learn about Lisa Tonge Solicitors, your local legal expert in Worsley, Manchester. Over 20 years of conveyancing and legal experience.",
};

const AboutPage = () => {
    return (
        <div className="container my-12">
            <h1 className="page-title">About Lisa Tonge Solicitors</h1>
            <div className="space-y-4">
            <p>I am Mrs LISA TONGE, a Solicitor in Worsley, Manchester, with more than <u>20 years experience</u> of conveyancing of residential properties in the modern property market.</p>
            <p>I have lived in Bolton, Salford and Worsley all my life and have considerable local knowledge.</p>
            <p>I was educated at Bolton School and I have honours degrees in English from Manchester University and in Law from London University.</p>
            <p>My practical knowledge of Law was gained from the Legal Practice Course at Chester College of Law, where I obtained my Diploma in Legal Practice with a Commendation.</p>
            <p>I trained with a well-known south Manchester firm, remained with that firm for over 5 years and qualified with them as a Solicitor. Following a happy and successful time with that firm I have been a sole practitioner solicitor in Walkden, Worsley, Manchester since 2003.</p>
            <p>I am a member of the Law Society and, as all solicitor firms are, my firm is regulated by the Solicitors Regulation Authority, which gives you confidence that I adhere to a high standard of conduct in dealing with your financial transactions.</p>
            </div>
            <ConveyancingQuality />
        </div>
    );
}
 
export default AboutPage;