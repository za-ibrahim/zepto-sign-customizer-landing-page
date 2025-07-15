import { useEffect, useState } from 'react';
import ComponentLayout from '../layouts/ComponentLayout'
import Heading from './Heading'
import Atropos from 'atropos/react';
import 'atropos/css';

import _1 from '../assets/dynamic/1/01.webp';
import _1_bg from '../assets/dynamic/1/bg.webp';
import _1_upper from '../assets/dynamic/1/upper.webp';
import _2 from '../assets/dynamic/2/02.webp';
import _2_bg from '../assets/dynamic/2/bg.webp';
import _2_upper from '../assets/dynamic/2/upper.webp';
import _3 from '../assets/dynamic/3/03.webp';
import _3_bg from '../assets/dynamic/3/bg.webp';
import _3_upper from '../assets/dynamic/3/upper.webp';
import _4 from '../assets/dynamic/4/04.webp';
import _4_bg from '../assets/dynamic/4/bg.webp';
import _4_upper from '../assets/dynamic/4/upper.webp';
import _5 from '../assets/dynamic/5/05.webp';
import _5_bg from '../assets/dynamic/5/bg.webp';
import _5_upper from '../assets/dynamic/5/upper.webp';
import _6 from '../assets/dynamic/6/06.webp';
import _6_bg from '../assets/dynamic/6/bg.webp';
import _6_upper from '../assets/dynamic/6/upper.webp';
import _7 from '../assets/dynamic/7/07.webp';
import _7_bg from '../assets/dynamic/7/bg.webp';
import _7_upper from '../assets/dynamic/7/upper.webp';

const featuresData = [
    {
        id: 1,
        title: 'Stunningly Realistic Previews',
        description: 'Go beyond limits with endless customization, offering personalization as unique as your vision.',
        image: _1,
        images: [
            { src: _1_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _1_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 2,
        title: 'Worldwide Accessibility',
        description: 'Provide Options with Detail: Text, Color, Images, Uploads, & More at Your Command.',
        image: _2,
        images: [
            { src: _2_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _2_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 3,
        title: 'Fully Customizable Signage',
        description: 'Let your customers instantly see their personalized products with our live preview.',
        image: _3,
        images: [
            { src: _3_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _3_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 4,
        title: 'Personalized Font Selection',
        description: 'Use Conditions to narrow customer requirements and deliver the best experience.',
        image: _4,
        images: [
            { src: _4_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _4_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 5,
        title: 'Dynamic Pricing',
        description: 'Adjust prices dynamically per personalization and display the price update real-time.',
        image: _5,
        images: [
            { src: _5_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _5_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 6,
        title: 'Bold, Vibrant Color Options',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        image: _6,
        images: [
            { src: _6_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _6_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
    {
        id: 7,
        title: 'All-Inclusive Signage Solutions',
        description: 'Use different styles to keep your store sleek and functional on any device.',
        image: _7,
        images: [
            { src: _7_bg, alt: 'bg', className: "", dataAtroposOffset: "-1" },
            { src: _7_upper, alt: 'All-Inclusive Signage Solutions', className: 'absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d', style: { transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }, dataAtroposOffset: "3" },
        ],
    },
];

const Features = () => {
    const [selectedTab, setSelectedTab] = useState(featuresData?.[0].id);
    const selectedFeature = featuresData?.find(feature => feature?.id === selectedTab);

    useEffect(() => {
        featuresData.forEach(feature => {
            new Image().src = feature.image;
            feature.images.forEach(img => {
                new Image().src = img.src;
            });
        });
    }, []);

    return (
        <div id='features' className='bg-gradient-to-b from-background/30 to-background/90 pb-24'>
            <Heading>Effective Features for Better Sales</Heading>
            <ComponentLayout>
                {/* Layout for small devices (accordion style) */}
                <div className="md:hidden w-full">
                    <div className="flex flex-col gap-4">
                        {featuresData?.map((feature) => (
                            <div key={feature?.id}>
                                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                                    <button
                                        onClick={() => setSelectedTab(feature?.id)}
                                        className={`w-full group p-4 text-left font-semibold transition-colors duration-300 flex justify-between items-center
                                                ${selectedTab === feature?.id
                                                ? 'tryBtn text-white'
                                                : 'bg-background'
                                            }`}
                                    >
                                        <div className='relative overflow-hidden'>
                                            <span className='block group-hover:-translate-y-8 translate-y-0 transition-all ease-out duration-300 p-0 m-0'>{feature?.title}</span>
                                            <span className='absolute top-0 block translate-y-8 group-hover:translate-y-0 transition-all ease-out duration-300 p-0 m-0'>{feature?.title}</span>
                                        </div>
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
                                className={`p-4 group rounded-xl text-left transition-colors duration-300 font-semibold cursor-pointer overflow-hidden shadow-md
                                            ${selectedTab === feature?.id
                                        ? 'tryBtn text-white shadow-sm'
                                        : 'bg-background'
                                    }`}
                            >
                                <div className='relative overflow-hidden'>
                                    <span className='block group-hover:-translate-y-8 translate-y-0 transition-all ease-out duration-300 p-0 m-0'>{feature?.title}</span>
                                    <span className='absolute top-0 block translate-y-8 group-hover:translate-y-0 transition-all ease-out duration-300 p-0 m-0'>{feature?.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <Atropos className="z-10 relative flex-1 md:w-2/3 lg:w-3/4 bg-transparent touch-none">
                        <div className='relative transform-3d translate-z-0'>
                            {selectedFeature?.images instanceof Array ? (
                                selectedFeature?.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img.src}
                                        alt={img.alt}
                                        loading="eager"
                                        style={img.style || {}}
                                        className={img.className || ""}
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