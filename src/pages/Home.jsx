import Hero from '../components/Hero'
import Commitment from '../components/Commitment'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Promot from '../components/Promot'
import FAQ from '../components/FAQ'
import ScrollToHashElement from '../components/ScrollToHashElement'

const Home = () => {
    return (
        <>
            <ScrollToHashElement />
            <Hero />
            <Commitment />
            <Features />
            <Pricing />
            <Promot />
            <FAQ />
        </>
    )
}

export default Home