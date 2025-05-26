import Heading from './Heading'
import ComponentLayout from '../layouts/ComponentLayout'

const Commitment = () => {
    return (
        <div className='bg-background/50 pb-24 pt-10'>
            <Heading>Simple, Intuitive, and Hassle-Free</Heading>
            <ComponentLayout>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <CompCard
                        title="Compatible with Themes"
                        description="Easily integrate Zepto Product Personalizer with your existing theme and store setup, ensuring a smooth installation, transition, and more."
                        icon="./assets/Theme.svg"
                    />
                    <CompCard
                        title="Compatible with Themes"
                        description="Easily integrate Zepto Product Personalizer with your existing theme and store setup, ensuring a smooth installation, transition, and more."
                        icon="./assets/Customization.svg"
                    />
                    <CompCard
                        title="Compatible with Themes"
                        description="Easily integrate Zepto Product Personalizer with your existing theme and store setup, ensuring a smooth installation, transition, and more."
                        icon="./assets/No-Code.svg"
                    />
                    <CompCard
                        title="Compatible with Themes"
                        description="Easily integrate Zepto Product Personalizer with your existing theme and store setup, ensuring a smooth installation, transition, and more."
                        icon="./assets/Community.svg"
                    />
                </div>
            </ComponentLayout>
        </div>
    )
}

const CompCard = ({ title, description, icon }) => {
    return (
        <div className='bg-background p-6 rounded-2xl flex lg:flex-row flex-col justify-between items-start gap-6'>
            <div className='w-[85px] h-[85px] shrink-0 md:ml-0 mx-auto flex items-center justify-center bg-primary/20 rounded-full'>
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