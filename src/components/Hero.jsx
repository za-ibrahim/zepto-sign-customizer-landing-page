import { useEffect } from 'react';
import Heading from './Heading';
import ComponentLayout from '../layouts/ComponentLayout';

const Hero = () => {
    useEffect(() => {
        gsap.fromTo("#heroText",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            "#img",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <div className='h-[calc(100vh-6rem)] flex items-center justify-center bg-gradient-to-b from-background/10 to-background/70 overflow-hidden relative'>
            <ComponentLayout>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 text-center'>

                    {/* Left Text Section */}
                    <div id="heroText" className='flex flex-col items-center lg:items-start justify-center gap-6 max-w-3xl mx-auto z-10 text-white text-left'>
                        <Heading className="!px-0 !py-0 lg:!text-left lg:!items-start !w-fit">
                            <span className='text-[2.7rem] lg:text-6xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary'>
                                The Customizer Built to Elevate Sales
                            </span>
                        </Heading>
                        <p className='text-base lg:text-lg text-center lg:text-left text-text/60 max-w-xl w-fit'>
                            Empower customers to create custom signs with live previews, complete design control, precise sizing, volumetric weight calculation, and full multi-language and currency support.
                        </p>
                        <div className='flex sm:flex-row flex-col items-center gap-4 pt-2 w-fit'>
                            <a href="https://apps.shopify.com/neon-sign-customizer" target="_blank" rel="noopener noreferrer">
                                <button className='tryBtn group flex items-center justify-center shadow-md bg-[#00ffff] hover:bg-[#00cccc] text-black px-6 py-3 sm:text-base text-sm font-semibold rounded-full gap-2 transition-all duration-300'>
                                    <span>Get 14 Days Free Trial</span>
                                    <span className='group-hover:translate-x-1 transition-all duration-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="18" height="18" viewBox="0 0 18 18"><path d="M5.47 3.53 10.94 9 5.469 14.471l1.06 1.06L13.061 9 6.531 2.47z" /></svg>
                                    </span>
                                </button>
                            </a>
                            <button className='group w-fit flex justify-between items-center shadow-md gap-2 border border-background/40 backdrop-blur-md bg-background/20  px-6 py-3 sm:text-base text-sm text-text font-semibold rounded-full transition-all duration-300'>
                                <span>Live Demo</span>
                                <span className='group-hover:translate-x-1 transition-all duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='black' width="18" height="18" viewBox="0 0 18 18"><path d="M5.47 3.53 10.94 9 5.469 14.471l1.06 1.06L13.061 9 6.531 2.47z" /></svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div id='img' className='relative hidden lg:block'>
                        <div className="absolute -inset-1 bg-gradient-to-r from-background to-primary rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                        <div id='heroImg' className='relative rounded-3xl overflow-hidden'>
                            <img className='w-[750px] object-contain' src="./assets/hero.png" alt="Neon Customizer Preview" />
                        </div>
                    </div>

                </div>
            </ComponentLayout>
        </div>
    );
};

export default Hero;
