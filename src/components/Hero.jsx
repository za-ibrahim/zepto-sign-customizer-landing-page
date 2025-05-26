import Heading from './Heading'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-6rem)] px-4'>
            <Heading>Simplify Custom Sign Quotes <br />Win More Sales</Heading>
            <div>
                <img className='mx-auto' src="./assets/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero