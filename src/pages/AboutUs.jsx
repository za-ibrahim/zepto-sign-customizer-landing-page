import React from 'react'
import Heading from '../components/Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const AboutUs = () => {
    return (
        <div>
            <ComponentLayout>
                <Heading>
                    <span className='text-5xl'>Zepto Apps</span>
                </Heading>
                <div className='flex flex-col gap-8 text-base leading-relaxed pb-12 text-text'>
                    <p>
                        Zepto Apps is a software company based in Bangladesh that specializes in providing solutions for Shopify Apps, Custom E-commerce, and Web application Development. Over the last 7 years, we have successfully served 68k customers with our premium products and services. Our SaaS application, Zepto Product Personalizer, is empowering 16,000 E-commerce businesses across 142 countries.
                    </p>
                    <p>
                        At Zepto Apps, we take pride in our operational efficiency, processing 8.75 million requests per day. Our team consists of talented individuals from diverse backgrounds.
                    </p>
                    <p>
                        We welcome all talented individuals who are passionate about technology to join us to become the leading software company in Bangladesh.
                    </p>
                    <p>
                        <span className='font-semibold'>Zepto Apps:</span> Passion, Innovation, Excellence.
                    </p>
                    <div>
                        <p className='font-semibold'>Why We Are the Leaders In Shopify Expertise</p>
                        <ul className="list-disc pl-12 mt-4">
                            <li>We provide the highest quality and have achieved an average rating of 4.9.</li>
                            <li>You get warranty protection of over two years with us.</li>
                            <li>We pride ourselves on showcasing our customer happiness scale, which scores 99.99%.</li>
                            <li>We provide 24x7 customer support.</li>
                        </ul>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    )
}

export default AboutUs