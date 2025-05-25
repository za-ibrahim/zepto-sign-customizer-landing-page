import React from 'react'
import Heading from './Heading'

const Pricing = () => {
    return (
        <div>
            <Heading subHeading="Choose the plan that best fits your business needs">Simple, transparent pricing</Heading>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid grid-cols-4 gap-6 mt-10'>
                    <PackageCard
                        title="Free version"
                        price="0"
                        features={[
                            "30 days",
                            "unlimited fonts",
                            "1 configuration",
                            "1 simple material",
                            "5 color, 5 sizes for material",
                            "2 possible sign shapes",
                            "3 sign fixing methods",
                            "Add text to configurator",
                        ]}
                    />
                    <PackageCard
                        title="Essential"
                        price="14.99"
                        features={[
                            "All free options",
                            "Add cliparts",
                            "2 simple materials",
                            "10 color, 10 sizes for material",
                            "5 possible sign shapes",
                            "6 fixing methods",
                            "2 borders",
                            "Upload images to configurator",
                            "Output pdf, svg generation",
                            "Add additional options",
                        ]}
                    />
                    <PackageCard
                        title="Growth"
                        price="29.99"
                        features={[
                            "All starter options",
                            "Unlimited configurations",
                            "All types of material unlimited",
                            "Unlimited material colors, sizes",
                            "Custom colors and sizes",
                            "All shapes, borders,",
                            "fixing methods available",
                            "Template design",
                            "Add additonals components",
                        ]}
                    />
                    <PackageCard
                        title="Unlimited"
                        price="149.99"
                        features={[
                            "All starter options",
                            "Unlimited configurations",
                            "All types of material unlimited",
                            "Unlimited material colors, sizes",
                            "Custom colors and sizes",
                            "All shapes, borders,",
                            "fixing methods available",
                            "Template design",
                            "Add additonals components",
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

const PackageCard = ({ title, price, features }) => {
    return (
        <div className='p-6 rounded-lg shadow-xl border border-primary'>
            <div className='text-center'>
                <h2 className='text-xl font-bold mb-4'>{title}</h2>
                <span className='!text-4xl font-semibold block'>${price}</span>
            </div>
            <button className='px-4 py-2 my-5 w-full bg-primary text-white rounded-full hover:bg-secondary transition'>Start free {price != 0 ? "7 day trail" : ""}</button>
            {/* <hr className='my-5' /> */}
            <div>
                <ul className='list-disc list-inside mb-6'>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pricing