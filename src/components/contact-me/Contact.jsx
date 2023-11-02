import ContactForm from "./ContactForm"
// import contactNow from "./images/contact.png"

const Contact = () => {
    return (
        <div className="bg-contactbg text-white container-padding-x container-padding-y">
            <div className="flex flex-row justify-center items-center gap-5">
                <div className="basis-6/12">
                    <div className="text-left">
                        {/* <h1 className="text-7xl font-bold">Contact Me</h1> */}
                        <h4 className="text-lg text-gray-400">I am currently available for freelance opportunities or any exciting offers that may align with my skills and expertise. You can reach me via phone at <a href="tel:+918421045354" className="hover:text-redColor text-white font-semibold">+918421045354</a> or by email at <a href="mailto:samnayakawadi@gmail.com" className="hover:text-redColor text-white font-semibold">samnayakawadi@gmail.com</a>. Alternatively, you may use the provided contact form to send a direct email. I look forward to connecting with you.</h4>
                        {/* <h4 className="text-lg px-52 text-gray-400">Connect with me via phone <a href="tel:+918421045354" className="hover:text-redColor">+918421045354</a> or email <a href="mailto:samnayakawadi@gmail.com" className="hover:text-redColor">samnayakawadi@gmail.com</a></h4> */}
                        {/* <h4 className="text-lg px-52 text-gray-400">Or Send the direct email using following contact form.</h4> */}
                    </div>
                    <div className="pt-10">
                        <ContactForm />
                    </div>
                </div>
                <div className="basis-6/12">
                    <div className="flex flex-row justify-center">
                        <img src="https://trydo.rainbowit.net/assets/images/about/about-8.jpg" />
                    </div>
                    {/* <img src={contactNow}/> */}
                </div>
            </div>
        </div>
    )
}

export default Contact