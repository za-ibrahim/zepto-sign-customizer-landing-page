import Heading from '../components/Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const FormItem = ({ type, label, name, placeholder = "" }) => {
    return (
        <>
            <label htmlFor={name} className='flex flex-col gap-1'>
                {label}
                {type === "textarea" ? (
                    <textarea name={name} placeholder={placeholder} rows={4} className='w-full border outline-none border-text/50 px-4 py-3 rounded-lg focus:border-accent transition-all duration-200' />
                ) : <input name={name} placeholder={placeholder} type={type} className='w-full border outline-none border-text/50 px-4 py-3 rounded-lg focus:border-accent transition-all duration-200' />}
            </label>
        </>
    )
}

const ContactUs = () => {
    return (
        <div className='py-15 bg-gradient-to-b from-background/10 to-background pb-24'>
            <ComponentLayout>
                <Heading>Contact Us</Heading>
                <div className='max-w-3xl mx-auto pb-16'>
                    <form className='w-full flex flex-col gap-5'>
                        <FormItem type="text" label="Name" placeholder="Name" />
                        <FormItem type="email" label="Email" placeholder="Email Address" />
                        <FormItem type="url" label="Myshopify URL" placeholder="Myshopify URL" />
                        <FormItem type="textarea" label="Comment or Message" />
                        <button type="button" className='text-sm px-4 py-3 rounded-lg bg-accent text-background font-semibold'>
                            Submit
                        </button>
                    </form>
                </div>
            </ComponentLayout>
        </div>
    )
}

export default ContactUs