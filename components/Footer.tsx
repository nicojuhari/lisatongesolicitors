const FooterComp = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Lisa Tonge Solicitors. All rights reserved.
                </p>
                <p className="text-sm mt-2">
                    Registered in England and Wales. Company No: 12345678. Authorised and regulated by the Solicitors Regulation Authority.
                </p>
            </div>
        </footer>
     );
}
 
export default FooterComp;