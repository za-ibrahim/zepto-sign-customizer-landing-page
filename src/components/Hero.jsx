import { useEffect } from 'react';
import Heading from './Heading';
import ComponentLayout from '../layouts/ComponentLayout';
import heroImg from '../assets/hero.png';
// import Atropos from 'atropos/react';
// import 'atropos/css'

const Hero = () => {
    useEffect(() => {
        gsap.fromTo("#heroText",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            "#img",
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <>
            <img src="./assets/abstract-wavy-line.png" alt="abstract" className='float-slow absolute top-[100vh] right-[0px] object-cover -z-[1] rotate-[-45deg]' />
            <div className='min-h-[calc(100vh-0rem)] pt-28 pb-2 flex items-center justify-center bg-gradient-to-b from-background/10 to-background/90 overflow-hidden relative'>
                <div
                    className={[
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#c4105e0a_1px,transparent_1px),linear-gradient(to_bottom,#c4105e0a_1px,transparent_1px)]",
                        "[mask-image:radial-gradient(circle_at_top,black_60%,transparent_100%)]"
                    ].join(' ')}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/10 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
                <ComponentLayout>
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 text-center'>

                        {/* Left Text Section */}
                        <div id="heroText" className='flex flex-col items-center lg:items-start justify-center gap-6 max-w-3xl mx-auto z-10 text-white text-left'>
                            <Heading className="relative !px-0 !py-0 lg:!text-left lg:!items-start !w-fit">
                                {/* <img className='rotate-slow w-28 !absolute -z-50 -left-30 -top-30' src="/assets/star_glow.webp" alt="star" /> */}
                                <span id="mainText" className='text-[2.7rem] md:text-6xl xl:text-6xl lg:text-5xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent'>
                                    The Custom<span id='specialI'>i</span>zer<br />Built to <br />Elevate Sales
                                </span>
                            </Heading>
                            <p className='text-base lg:text-lg text-center lg:text-left text-text/90 max-w-xl w-fit'>
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
                                <a href="https://zepto-sign-customizer.myshopify.com/products/custom-neon" target='_blank' rel='noopener noreferrer'>
                                    <button className='group w-fit flex justify-between items-center shadow-md gap-2 border border-background/40 backdrop-blur-md bg-background/20  px-6 py-3 sm:text-base text-sm text-text font-semibold rounded-full transition-all duration-300'>
                                        <span>Live Demo</span>
                                        <span className='group-hover:translate-x-1 transition-all duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill='black' width="18" height="18" viewBox="0 0 18 18"><path d="M5.47 3.53 10.94 9 5.469 14.471l1.06 1.06L13.061 9 6.531 2.47z" /></svg>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div id='img' className='relative hidden lg:block bg-clip-border'>
                            {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/50 rounded-3xl blur-2xl opacity-40 animate-pulse"></div> */}
                            <div id='heroImg' className='relative z-10'>
                                {/* <Atropos shadow={false} className='relative'> */}
                                <img className='select-none w-[800px] object-contain' src={heroImg} alt="Neon Customizer Preview" />
                                {/* </Atropos> */}
                            </div>
                        </div>

                    </div>
                </ComponentLayout>
            </div>
        </>
    );
};

export default Hero;
