import Heading from './Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const Commitment = () => {
    return (
        <div className='bg-gradient-to-b from-background/90 to-background/30 pb-24'>
            <Heading>Simple, Intuitive, and Hassle-Free</Heading>
            <ComponentLayout>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <CompCard
                        title="Theme-Friendly Integration"
                        description="Seamlessly integrate Zepto Sign Customizer with your existing store setup for smooth installation, easy transitions, and ongoing updates."
                        icon="./assets/Theme.svg"
                        bg="bg-[#dd00ff]/20"
                    />
                    <CompCard
                        title="Designed for Simplicity"
                        description="Offering a sign customization experience doesn't have to be hard—Zepto Sign Customizer is simple to use yet impressively powerful."
                        icon="./assets/Customization.svg"
                        bg="bg-[#0bb6fb]/20"
                    />
                    <CompCard
                        title="Zero-Code Required"
                        description="Zepto Sign Customizer requires no coding skills and offers a user-friendly experience that feels as intuitive as using your phone."
                        icon="./assets/No-Code.svg"
                        bg="bg-[#f2b448]/20"
                    />
                    <CompCard
                        title="Support at Every Step"
                        description="Need help? Our chat and email support has you covered every step of the way."
                        icon="./assets/Community.svg"
                        bg="bg-[#72cc57]/20"
                    />
                </div>
            </ComponentLayout>
        </div>
    )
}

const CompCard = ({ title, description, icon, bg }) => {
    return (
        <div className='bg-background border border-primary/20 p-6 rounded-2xl flex lg:flex-row flex-col justify-between items-start gap-6'>
            <div className={`w-[85px] h-[85px] shrink-0 md:ml-0 mx-auto flex items-center justify-center ${bg} rounded-full`}>
                <img className='w-10 h-10 p-0 m-0' src={icon} alt={title} />
            </div>
            <div className='flex flex-col gap-2 md:text-left text-center'>
                <p className='!text-xl font-semibold'>{title}</p>
                <p className='font-light'>{description}</p>
            </div>
        </div>
    )
}

export default Commitment