import React from 'react'
import ComponentLayout from '../layouts/ComponentLayout'
import Heading from '../components/Heading'

const PrivacyPolicy = () => {
    return (
        <div className='py-15 pt-28 bg-gradient-to-b from-background/30 to-background/90 pb-24'>
            <ComponentLayout>
                <Heading>Privacy Policy</Heading>
                <div className='flex flex-col gap-8 text-base leading-relaxed pb-12 text-text'>
                    <p>
                        Your privacy is important to us. It is Zepto Apps' policy to respect your privacy regarding any information we may collect from you across our apps, and other sites we own and operate.
                    </p>
                    <p>
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
                    </p>
                    <p>
                        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                    </p>
                    <p>
                        We don't share any personally identifying information publicly or with third-parties, except when required to by law.
                    </p>
                    <p>
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our apps will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                    </p>
                </div>
            </ComponentLayout>
        </div>
    )
}

export default PrivacyPolicy