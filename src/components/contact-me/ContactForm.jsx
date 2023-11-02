import axios from "axios"
import { useState } from "react"

const ContactForm = () => {

    const defaultData = {
        name: "",
        email_or_mobile: "",
        subject_title: "",
        message: "",
        access_key: "7ba7e4f0-9bba-4244-99e6-2e387030bef7",
        subject: "New Form Submission from Your Website (samnayakawadi.tech)"
    }

    const [data, setData] = useState(defaultData)

    const defaultAlert = {
        status: false,
        type: undefined, //error or success or warning
        message: ""
    }
    const [alert, setAlert] = useState(defaultAlert)

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData(prevState => { return { ...prevState, [name]: value } })
    }

    const dataValidatorHandler = () => {
        if (data.name === "") {
            setAlert(prevState => { return { ...prevState, status: true, type: "warning", message: "Name Cannot Be Empty" } })
            return false
        }
        else if (data.email_or_mobile === "") {
            setAlert(prevState => { return { ...prevState, status: true, type: "warning", message: "Email or Mobile Cannot Be Empty" } })
            return false
        }
        else if (data.subject_title === "") {
            setAlert(prevState => { return { ...prevState, status: true, type: "warning", message: "Subject Cannot Be Empty" } })
            return false
        }
        else if (data.message === "") {
            setAlert(prevState => { return { ...prevState, status: true, type: "warning", message: "Message Cannot Be Empty" } })
            return false
        }
        else {
            setAlert(prevState => { return { ...prevState, status: false, type: undefined, message: undefined } })
            return true
        }
    }

    const onSubmitHandler = (e) => {

        e.preventDefault()

        if (alert.type !== "processing") {
            if (dataValidatorHandler()) {
                setAlert(prevState => { return { ...prevState, status: true, type: "processing", message: undefined } })

                setTimeout(() => {
                    axios.post("https://api.web3forms.com/submit", data).then(res => {
                        setAlert(prevState => { return { ...prevState, status: true, type: "success", message: res.data.message } })
                        setData(defaultData)
                    }).catch(err => {
                        setAlert(prevState => { return { ...prevState, status: true, type: "error", message: err.response.data.message } })
                    })
                }, 1500)

            }
        }

    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-start gap-5">
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <input name="email_or_mobile" onChange={onChangeHandler} value={data.email_or_mobile} type="text" placeholder="Your Email or Mobile Number" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <input name="subject_title" onChange={onChangeHandler} value={data.subject_title} type="text" placeholder="Your Subject" className="input input-bordered w-full bg-contactbg border-gray-500 focus:border-white" />
            <textarea name="message" onChange={onChangeHandler} value={data.message} className="textarea textarea-bordered bg-contactbg border-gray-500 w-full h-32 text-base focus:border-white" placeholder="Your Message"></textarea>

            {alert.status && alert.type === "info" && <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{alert.message}</span>
            </div>}

            {alert.status && alert.type === "success" && <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{alert.message}</span>
            </div>}

            {alert.status && alert.type === "warning" && <div className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{alert.message}</span>
            </div>}

            {alert.status && alert.type === "error" && <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{alert.message}</span>
            </div>}

            <button type="submit" className={`btn bg-redColor border-redColor text-white hover:bg-redColor hover:border-redColor hover:text-white w-full tracking-widest ${alert.status && alert.type === "processing" && "bg-gray-600 border-gray-600 text-white hover:bg-gray-600 hover:border-gray-600 hover:text-white cursor-wait"}`}>{(alert.status && alert.type === "processing") ? "Sending Request" : "Submit"}</button>
        </form>
    )
}

export default ContactForm