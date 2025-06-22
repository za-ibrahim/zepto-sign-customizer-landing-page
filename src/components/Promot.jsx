import Heading from './Heading'
import ComponentLayout from '../layouts/ComponentLayout'
import gearGif from '../assets/gear.gif'

const Promot = () => {
    return (
        <div className='py-15 bg-accent/60 pb-24 relative overflow-hidden'>
            <img src={gearGif} alt="gear" className='absolute -top-20 -right-20 opacity-10 w-48' />
            <img src={gearGif} alt="gear" className='absolute -bottom-20 -left-20 opacity-10 w-48' />
            <ComponentLayout>
                <Heading><span className="text-background">Try our best Sign Customizer—built to keep you ahead</span></Heading>
                <div className='flex sm:flex-row flex-col items-center mx-auto gap-4 pt-2 w-fit'>
                    <a href="https://apps.shopify.com/neon-sign-customizer" target="_blank" rel="noopener noreferrer">
                        <button className='tryBtn group flex items-center justify-center shadow text-black !border !border-secondary/80 px-6 py-3 sm:text-base text-sm font-semibold rounded-full gap-2 transition-all duration-300'>
                            <span>Create Your First Sign</span>
                            <span className='group-hover:translate-x-1 transition-all duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="18" height="18" viewBox="0 0 18 18"><path d="M5.47 3.53 10.94 9 5.469 14.471l1.06 1.06L13.061 9 6.531 2.47z" /></svg>
                            </span>
                        </button>
                    </a>
                    <button className='group w-fit flex justify-between items-center shadow gap-2 border border-background bg-transparent px-6 py-3 sm:text-base text-sm text-background font-semibold rounded-full transition-all duration-300'>
                        <span>View Live Demo</span>
                        <span className='group-hover:translate-x-1 transition-all duration-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="18" height="18" viewBox="0 0 18 18"><path d="M5.47 3.53 10.94 9 5.469 14.471l1.06 1.06L13.061 9 6.531 2.47z" /></svg>
                        </span>
                    </button>
                </div>
            </ComponentLayout>
        </div>
    )
}

export default Promot