import { Metadata } from 'next'
import ContactsComp from '@/components/Contacts';

const ContactsPage = () => {
    return (
        <div className="container my-12">
            <h1 className="page-title">Contact Lisa Tonge Solicitors</h1>
            <div className="space-y-10">
                <div className="text-center">
                    <p>If you would like to get in touch, please feel free to reach out via phone, mobile, or email.</p>
                    <p>I am here to assist you with your legal needs and look forward to hearing from you.</p>
                </div>
                <ContactsComp />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8429984330014!2d-2.398474622696229!3d53.524860772341505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba8bc47a53f2d%3A0x4ca547c34a567d76!2sLisa%20Tonge%20Solicitors!5e0!3m2!1sen!2sat!4v1764668908863!5m2!1sen!2sat" className="w-full" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div> 
);}
 
export default ContactsPage;

export const metadata: Metadata = {
    title: 'Contact Lisa Tonge Solicitors from Worsley Manchester',
    description: 'Get in touch with Lisa Tonge Solicitors for expert legal advice and services in Worsley, Manchester. Phone, mobile, and email contact details provided.'
};