import Atropos from 'atropos/react';
import 'atropos/css'

const UpperFooter = () => {
    return (
        <div className='bg-[#110425]'>
            <div className='relative md:aspect-[800/244] aspect-[489/244] h-full mx-auto max-w-full'>
                <img src="./assets/footer-image-mutated.png" alt="footer image" className='mx-auto object-cover size-full md:object-contain' />
                <div className='absolute bottom-0 w-full flex items-end justify-center'>
                    <a href="https://apps.shopify.com/neon-sign-customizer" target="_blank" rel="noopener noreferrer" className=''>
                        <button className='tryBtn text-black !border !border-secondary/60 md:px-6 md:py-3 sm:text-base px-3 py-2 text-xs font-semibold rounded-full gap-2 transition-all duration-300'>
                            <span>Create Your First Sign</span>
                        </button>
                    </a>
                </div>
                {/* <div className=''>
                <Atropos shadow={false} className='absolute w-[145%] top-[-800px] left-[-23.5%]' >
                <span className="atropos-inner">
                <img className="atropos-header-spacer relative w-full h-auto left-0 top-0 invisible" src="https://atroposjs.com/images/header/atropos-bg.svg" alt="stars" />
                <img className='absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d' data-atropos-offset="-4.5" src="https://atroposjs.com/images/header/atropos-bg.svg" alt="stars" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} />
                <img className='absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d' data-atropos-offset="-2.5" src="https://atroposjs.com/images/header/atropos-mountains.svg" alt="mountains" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} />
                <img className='absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d' data-atropos-offset="0" src="https://atroposjs.com/images/header/atropos-forest-back.svg" alt="forest" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} />
                <img className='absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d' data-atropos-offset="2" src="https://atroposjs.com/images/header/atropos-forest-mid.svg" alt="forest" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} />
                <img className='absolute left-[0%] top-[0%] w-[100%] h-[100%] object-contain block z-10 max-w-none pointer-events-none transform-3d' data-atropos-offset="4" src="https://atroposjs.com/images/header/atropos-forest-front.svg" alt="forest" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} />
                <div data-atropos-offset="6" className="absolute left-0 top-0 w-full h-full z-20 flex justify-center items-center" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} >
                <a className="bg-primary text-white rounded-full px-4 py-2 md:px-6 md:py-2 font-bold md:text-xs inline-flex hover:bg-opacity-70 duration-200 translate-y-full" href="/docs">Get Started</a>
                </div>
                <div data-atropos-offset="6" className="absolute left-0 top-[100px] w-full h-full z-20 flex justify-center items-center" style={{ transitionDuration: "300ms", transform: "translate3d(0px, 0px, 0px)" }} >
                <a className="bg-primary text-white rounded-full px-4 py-2 md:px-6 md:py-2 font-bold md:text-xs inline-flex hover:bg-opacity-70 duration-200 translate-y-full" href="/docs">Get Started</a>
                </div>
                </span>
                </Atropos>
                </div> */}
            </div>
        </div >
    )
}

export default UpperFooter