const ContactForm = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-5">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <input type="text" placeholder="Your Email or Mobile Number" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <input type="text" placeholder="Your Subject" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <textarea className="textarea textarea-bordered bg-contactbg border-gray-500 w-full h-32 text-base focus:border-white" placeholder="Your Message"></textarea>
            <button className="btn bg-red-600 border-red-600 text-white hover:text-black w-full tracking-widest">Submit</button>
        </div>
    )
}

export default ContactForm