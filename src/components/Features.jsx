import { useState, useRef, useEffect } from 'react';
import ComponentLayout from '../layouts/ComponentLayout'
import Heading from './Heading'
import Atropos from 'atropos/react';

const featuresData = [
    {
        id: 1,
        title: 'Stunningly Realistic Previews',
        description: 'Go beyond limits with endless customization, offering personalization as unique as your vision.',
        // image: './assets/01.png',
        image: [
            { src: './assets/dynamic/1/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/1/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
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
        // image: './assets/03.png',
        image: [
            { src: './assets/dynamic/3/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/3/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 4,
        title: 'Personalized Font Selection',
        description: 'Use Conditions to narrow customer requirements and deliver the best experience.',
        // image: './assets/04.png',
        image: [
            { src: './assets/dynamic/4/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/4/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 5,
        title: 'Dynamic Pricing',
        description: 'Adjust prices dynamically per personalization and display the price update real-time.',
        // image: './assets/05.png',
        image: [
            { src: './assets/dynamic/5/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/5/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 6,
        title: 'Bold, Vibrant Color Options',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        // image: './assets/06.png',
        image: [
            { src: './assets/dynamic/6/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/6/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 7,
        title: 'All-Inclusive Signage Solutions',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        image: [
            { src: './assets/dynamic/7/bg.png', alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: './assets/dynamic/7/upper.png', alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
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
                            <div key={feature?.id}>
                                <div className="w-full rounded-lg overflow-hidden shadow-sm">
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
                                    <div
                                        className={`rounded-xl rounded-t-none overflow-hidden shadow-md transition-all duration-500 ease-in-out bg-background/50
                                                ${selectedTab === feature?.id ? 'max-h-[1000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
                                    >
                                        <div>
                                            <img
                                                src={selectedFeature?.image}
                                                alt={selectedFeature?.title}
                                                className="w-full object-contain"
                                            />
                                            {/* <div className='px-6 py-4 text-center'>
                                            <p className="leading-relaxed !text-base">{feature?.description}</p>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Layout for medium and larger devices (enhanced original tab style) */}
                <div className="feature-body hidden md:flex flex-row-reverse gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        {featuresData.map((feature) => (
                            <button
                                key={feature?.id}
                                onClick={() => setSelectedTab(feature?.id)}
                                className={`p-4 group rounded-xl text-left transition-colors duration-300 font-semibold cursor-pointer overflow-hidden
                                            ${selectedTab === feature?.id
                                        ? 'tryBtn text-white shadow-sm'
                                        : 'bg-background/50'
                                    }`}
                            >
                                <div className='relative overflow-hidden'>
                                    <span className='block group-hover:-translate-y-8 translate-y-0 transition-all duration-500'>{feature?.title}</span>
                                    <span className='absolute top-0 block translate-y-8 group-hover:translate-y-0 transition-all duration-500'>{feature?.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <Atropos className="z-10 relative flex-1 md:w-2/3 lg:w-3/4 bg-transparent">
                        <div shadow={false} className='relative transform-3d translate-z-0'>
                            {selectedFeature?.image instanceof Array ? (
                                selectedFeature?.image.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img.src}
                                        alt={img.alt}
                                        className={img.className || ""}
                                        style={img.style || {}}
                                        data-atropos-offset={img.dataAtroposOffset || null}
                                    />
                                ))
                            ) : (
                                <img
                                    src={selectedFeature?.image}
                                    alt={selectedFeature?.title}
                                    className="w-full object-contain"
                                />
                            )}
                            {/* <div className='px-6 py-4 text-center'>
                                <p className="leading-relaxed !text-base">{selectedFeature?.description}</p>
                            </div> */}
                        </div>
                    </Atropos>
                </div>
            </ComponentLayout>
        </div>
    );
}

export default Features