import { useState } from 'react';
import ComponentLayout from '../layouts/ComponentLayout'
import Heading from './Heading'

const featuresData = [
    {
        id: 1,
        title: 'Stunningly Realistic Previews',
        description: 'Go beyond limits with endless customization, offering personalization as unique as your vision.',
        image: './assets/01.png',
    },
    {
        id: 2,
        title: 'Worldwide Accessibility',
        description: 'Provide Options with Detail: Text, Color, Images, Uploads, & More at Your Command.',
        image: './assets/02.png',
    },
    {
        id: 3,
        title: 'Fully Customizable Signage',
        description: 'Let your customers instantly see their personalized products with our live preview.',
        image: './assets/03.png',
    },
    {
        id: 4,
        title: 'Personalized Font Selection',
        description: 'Use Conditions to narrow customer requirements and deliver the best experience.',
        image: './assets/04.png',
    },
    {
        id: 5,
        title: 'Dynamic Pricing',
        description: 'Adjust prices dynamically per personalization and display the price update real-time.',
        image: './assets/05.png',
    },
    {
        id: 6,
        title: 'Bold, Vibrant Color Options',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        image: './assets/06.png',
    },
    {
        id: 7,
        title: 'All-Inclusive Signage Solutions',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        image: './assets/07.png',
    },
];

const Features = () => {
    const [selectedTab, setSelectedTab] = useState(featuresData?.[0].id);
    const selectedFeature = featuresData?.find(feature => feature?.id === selectedTab);

    return (
        <div id='features' className='py-15 pb-24'>
            <Heading>Effective Features for Better Sales</Heading>
            <ComponentLayout>
                {/* Layout for small devices (accordion style) */}
                <div className="md:hidden w-full">
                    <div className="flex flex-col gap-3">
                        {featuresData?.map((feature) => (
                            <>
                                <div key={feature?.id} className="w-full rounded-lg overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setSelectedTab(feature?.id)}
                                        className={`w-full p-4 text-left font-semibold transition-colors duration-300 flex justify-between items-center
                                                ${selectedTab === feature?.id
                                                ? 'tryBtn text-white'
                                                : 'bg-background/50'
                                            }`}
                                    >
                                        {feature?.title}
                                        <span className={`transform transition-transform duration-300 ${selectedTab === feature?.id ? 'rotate-180' : 'rotate-0'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div
                                    className={`rounded-xl overflow-hidden shadow-md transition-all duration-500 ease-in-out bg-background/50
                                                ${selectedTab === feature?.id ? 'max-h-[1000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
                                >
                                    <div>
                                        <img
                                            src={selectedFeature?.image}
                                            alt={selectedFeature?.title}
                                            className="w-full object-contain"
                                        />
                                        <div className='px-6 py-4 text-center'>
                                            <p className="leading-relaxed !text-base">{feature?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                {/* Layout for medium and larger devices (enhanced original tab style) */}
                <div className="hidden md:flex flex-row-reverse gap-8 items-center">
                    <div className="flex flex-col gap-4 md:w-1/3 lg:w-1/4">
                        {featuresData.map((feature) => (
                            <button
                                key={feature?.id}
                                onClick={() => setSelectedTab(feature?.id)}
                                className={`w-full p-4 rounded-xl text-left transition-colors duration-300 font-semibold cursor-pointer overflow-hidden
                                            ${selectedTab === feature?.id
                                        ? 'tryBtn text-white shadow-sm'
                                        : 'bg-background/50'
                                    }`}
                            >
                                {feature?.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 md:w-2/3 lg:w-3/4 rounded-xl overflow-hidden shadow-md bg-background/50">
                        <div>
                            <img
                                src={selectedFeature?.image}
                                alt={selectedFeature?.title}
                                className="w-full object-contain"
                            />
                            <div className='px-6 py-4 text-center'>
                                <p className="leading-relaxed !text-base">{selectedFeature?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
}

export default Features