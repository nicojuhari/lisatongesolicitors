import CallMeComp from "@/components/CallMe";
import ServicesComp from "@/components/Services";

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