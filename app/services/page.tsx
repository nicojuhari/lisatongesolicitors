import CallMeComp from "@/components/CallMe";
import ServicesComp from "@/components/Services";

export const metadata = {
    title: "Lisa Tonge Solicitors | Worsley Manchester",
    description: "Local solicitor in Worsley, Manchester. Conveyancing, wills, probate, business documents, and more.",
};

const ServicesPage = () => {
    return ( 
        <div>
            <ServicesComp>
                <h2 className="section-title text-center">Business and Personal Legal Services</h2>
            </ServicesComp>
            <CallMeComp />
        </div>
     );
}
 
export default ServicesPage;