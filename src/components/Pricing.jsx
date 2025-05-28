import Heading from './Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const Pricing = () => {
    return (
        <div id='pricing' className='py-15 bg-background/50 pb-24'>
            <Heading subHeading="Choose the plan that best fits your business needs">Simple, transparent pricing</Heading>
            <ComponentLayout>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    {/* <PackageCard
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
                    /> */}
                    <PackageCard
                        title="Essential"
                        price="14.99"
                        features={[
                            "Up to 5 attributed orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                    <PackageCard
                        title="Growth"
                        price="29.99"
                        features={[
                            "Up to 15 attributed orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                    <PackageCard
                        title="Unlimited"
                        price="149.99"
                        features={[
                            "Unlimited orders per month",
                            "Unlimited customizers",
                            "All Features Included",
                        ]}
                    />
                </div>
            </ComponentLayout>
        </div>
    )
}

const PackageCard = ({ title, price, features }) => {
    return (
        <div className='pricing-card rounded-lg shadow-md border-none border-primary backdrop-blur-3xl bg-background/70'>
            <div className='text-center custom-shape pt-5 pb-14'>
                <h2 className='text-xl font-bold mb-4'>{title}</h2>
                <span className='!text-4xl font-semibold block'>${price}</span>
            </div>
            {/* <button className='px-4 py-2 my-5 w-full bg-primary text-white rounded-full hover:bg-secondary transition'>Start free {price != 0 ? "7 day trail" : ""}</button> */}
            {/* <hr className='my-5' /> */}
            <div className='p-6'>
                <ul className='list-none flex flex-col gap-2'>
                    {features.map((feature, index) => (
                        <li key={index} className='leading-relaxed flex items-center justify-center gap-2'>
                            {/* <span className="mr-2 text-blue-500 font-bold">✔</span> */}
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pricing