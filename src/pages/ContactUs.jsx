import Heading from '../components/Heading'
import emailjs from '@emailjs/browser';
import ComponentLayout from '../layouts/ComponentLayout'
import { useState } from 'react';

const FormItem = ({ type, label, name, placeholder = "", ...props }) => {
    return (
        <>
            <label htmlFor={name} className='flex flex-col gap-1'>
                {label}
                {type === "textarea" ? (
                    <textarea {...props} name={name} placeholder={placeholder} rows={4} className='w-full border outline-none border-text/50 px-4 py-3 rounded-lg focus:border-accent transition-all duration-200' />
                ) : <input {...props} name={name} placeholder={placeholder} type={type} className='w-full border outline-none border-text/50 px-4 py-3 rounded-lg focus:border-accent transition-all duration-200' />}
            </label>
        </>
    )
}

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [notify, setNotify] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((_) => {
                setIsLoading(false);
                setNotify(true);
                setTimeout(() => {
                    setNotify(false);
                }, 3000);
            }, (error) => {
                console.error("Error sending email:", error);
                alert("There was an error sending your message. Please try again later.");
            });
        e.target.reset();
    }


    return (
        <div className='pt-28 bg-gradient-to-b from-background/30 to-background/90 pb-24'>
            <ComponentLayout>
                <Heading>Contact Us</Heading>
                <div className='max-w-3xl mx-auto'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                        <FormItem required type="text" label="Name" name="from_name" placeholder="Name" />
                        <FormItem required type="email" label="Email" name="reply_to" placeholder="Email Address" />
                        <FormItem type="url" label="Myshopify URL" name="myshopify_url" placeholder="Myshopify URL" />
                        <FormItem required type="textarea" name="message" label="Message" />
                        <button type="submit" disabled={isLoading} className={`${isLoading ? "bg-accent/50 !cursor-not-allowed" : "bg-accent hover:ring-2 hover:ring-secondary"} px-4 py-3 rounded-lg text-background font-semibold transition-all duration-200 flex items-center justify-center gap-2`}>
                            {isLoading ? <Loader /> : "Send Message"}
                        </button>
                        {notify && <p className='text-center text-text/70' onClick={() => setNotify(false)}>Message sent successfully!</p>}
                    </form>
                </div>
            </ComponentLayout>
        </div>
    )
}

const Loader = () => {
    return (
        <>
            <div className="loader">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className={`bar${i + 1} bg-white`}></div>
                ))}
            </div>
            <style>
                {`
        .loader {
          position: relative;
          width: 24px;
          height: 24px;
          border-radius: 10px;
        }

        .loader div {
          width: 8%;
          height: 24%;
          position: absolute;
          left: 50%;
          top: 30%;
          opacity: 0;
          border-radius: 50px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          animation: fade458 1s linear infinite;
        }

        @keyframes fade458 {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.25;
          }
        }

        ${[...Array(12)]
                        .map((_, i) => {
                            const deg = i * 30;
                            const delay = -(1.2 - i * 0.1).toFixed(1);
                            return `.loader .bar${i + 1} {
              transform: rotate(${deg}deg) translate(0, -130%);
              animation-delay: ${delay}s;
            }`;
                        })
                        .join("\n")}
        `}
            </style>
        </>
    )
}

export default ContactUs